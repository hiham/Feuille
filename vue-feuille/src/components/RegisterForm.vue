<template>
  <div class="card-container">
    <div class="card">
      <div class="card-header deep-purple white-text">
        <h3 class="card-title">Create Project</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="projectName">Username</label>
            <input
              v-model="projectData.name"
              type="text"
              class="form-control"
              id="projectName"
            />
          </div>

          <div class="form-group">
            <label for="projectState">E-mail</label>
            <input
              v-model="projectData.state"
              type="text"
              class="form-control"
              id="projectState"
              required
            />
          </div>

          <div class="form-group">
            <label for="projectState">Password</label>
            <input
              v-model="projectData.area"
              type="text"
              class="form-control"
              id="projectArea"
              required
            />
          </div>

          <div class="form-group">
            <label for="projectUsNb">Confirm password</label>
            <input
              v-model="projectData.nbUs"
              type="text"
              class="form-control"
              id="projectArea"
              required
            />
          </div>
          <template
            v-if="
              projectData.name && projectData.nbUs && projectData.resources[0]
            "
          >
            <router-link
              :to="`/project/${projectData.name}/${projectData.nbUs}/details/create`"
              ><button type="submit" class="btn btn-primary">
                Create Project
              </button></router-link
            >
          </template>
          <template v-else>
            <button type="submit" class="btn btn-primary">
              Create Project
            </button>
          </template>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const projectData = ref({
  name: "",
  state: "",
  area: "",
  nbUs: "",
  resources: [],
});

const submitForm = () => {
  console.log("Project data:", projectData.value);
};

const addResource = () => {
  projectData.value.resources.push({
    name: "",
    team: "",
  });
};
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
