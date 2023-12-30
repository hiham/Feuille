<template>
  <div class="card-container">
    <div class="card">
      <div class="card-header deep-purple white-text">
        <h3 class="card-title">Register Form</h3>
      </div>
      <div class="card-body">
        <Form @submit="handleRegister" :validation-schema="schema">
          <div v-if="!successful">
            <div class="form-group">
              <label for="username">Username</label>
              <Field name="username" type="text" class="form-control" />
              <ErrorMessage name="username" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <Field name="email" type="email" class="form-control" />
              <ErrorMessage name="email" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <Field name="password" type="password" class="form-control" />
              <ErrorMessage name="password" class="error-feedback" />
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block" :disabled="loading">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                Sign Up
              </button>
            </div>
          </div>
        </Form>
        <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'Register',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required('Username is required!')
        .min(3, 'Must be at least 3 characters!')
        .max(20, 'Must be maximum 20 characters!'),
      email: yup
        .string()
        .required('Email is required!')
        .email('Email is invalid!')
        .max(50, 'Must be maximum 50 characters!'),
      password: yup
        .string()
        .required('Password is required!')
        .min(6, 'Must be at least 6 characters!')
        .max(40, 'Must be maximum 40 characters!')
    })

    return {
      successful: false,
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
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile')
    }
  },
  methods: {
    handleRegister(user) {
      this.message = ''
      this.successful = false
      this.loading = true

      this.$store.dispatch('auth/register', user).then(
        (data) => {
          this.message = data.message
          this.successful = true
          this.loading = false
        },
        (error) => {
          this.message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
          this.loading = false
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
