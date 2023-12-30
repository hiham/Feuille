<template>
  <div class="card-container">
    <div class="card">
      <div class="card-header deep-purple white-text">
        <h3 class="card-title">Login Form</h3>
      </div>
      <div class="card-body">
        <Form @submit="handleLogin" :validation-schema="schema">
          <div class="form-group">
            <label for="userName">Username</label>
            <Field name="username" type="text" class="form-control" />
            <ErrorMessage name="username" class="error-feedback" />
          </div>

          <div class="form-group">
            <label for="pwd">Password</label>
            <Field name="password" type="password" class="form-control" />
            <ErrorMessage name="password" class="error-feedback" />
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span>Login</span>
            </button>
          </div>

          <div class="form-group">
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'Login',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required('Username is required!'),
      password: yup.string().required('Password is required!')
    })

    return {
      loading: false,
      message: '',
      schema
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile')
    }
  },
  methods: {
    handleLogin(user) {
      this.loading = true

      this.$store.dispatch('auth/login', user).then(
        () => {
          this.$router.push('/profile')
        },
        (error) => {
          this.loading = false
          this.message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
        }
      )
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.card {
  width: 80%;
  max-width: 80%;
  max-height: 80%;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.card-header {
  padding: 20px;
}

.card-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.deep-purple {
  background-color: #673ab7;
}

.white-text {
  color: #fff;
}

.form-control {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-left: 25%;
  transition: width 0.3s;
  display: block;
  width: 50%;
  font-size: large;
}

.btn-secondary {
  background-color: #9c27b0;
  color: #fff;
}

.resources-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.resource-card {
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  flex-grow: 1;
  width: calc(15% - 10px);
  margin-bottom: 10px;
  box-sizing: border-box;
}

.resource-card .card-body {
  padding: 20px;
}
</style>
