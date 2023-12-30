<template>
  <div class="card-container">
    <div class="card">
      <div class="card-header deep-purple white-text">
        <h3 class="card-title">Create Sheet</h3>
      </div>
      <div class="card-body">
        <Form @submit="handleCreation" :validation-schema="schema">
          <div v-if="!successful">
            <div class="form-group">
              <label for="name">Sheet name</label>
              <Field name="name" type="text" class="form-control" />
              <ErrorMessage name="name" class="error-feedback" />
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block" :disabled="loading">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                Create
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
import FeuilleService from '@/services/feuille.service'
import * as yup from 'yup'

export default {
  name: 'SheetCreation',
  components: {
    Form,
    Field,
    ErrorMessage
  },
  data() {
    const schema = yup.object().shape({
      name: yup
        .string()
        .required("Sheet's name is required!")
        .min(3, 'Must be at least 3 characters!')
    })

    return {
      successful: false,
      loading: false,
      message: '',
      schema
    }
  },
  methods: {
    handleCreation(name) {
      const user = JSON.parse(localStorage.getItem('user'))
      FeuilleService.createSheet(user, name)
        .then((response) => {
          const data = response.data
          this.message = 'Project successfully created'
          this.successful = true
          this.loading = false
        })
        .catch((error) => {
          this.message =
            (error.response && error.response.data && error.response.data.message) ||
            error.message ||
            error.toString()
          this.successful = false
          this.loading = false
        })
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
