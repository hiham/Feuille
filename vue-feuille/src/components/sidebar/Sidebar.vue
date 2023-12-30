<script>
/* eslint-disable */
import SidebarLink from '@/components/sidebar/SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from '@/components/sidebar/state'

export default {
  props: {},
  components: { SidebarLink },
  name: 'vue-SideBar',
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN')
      }

      return false
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR')
      }

      return false
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/login')
    }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <div><i class="fas fa-leaf"></i></div>
        <div class="collapsed">F</div>
        <br />
      </span>
      <span v-else><i class="fas fa-leaf"></i> Feuille</span>
    </h1>

    <SidebarLink to="/home" icon="fas fa-columns">Dashboard</SidebarLink>
    <SidebarLink to="/sheetsList" icon="fa-solid fa-list" v-if="currentUser">Sheets</SidebarLink>
    <SidebarLink to="/sheetsForm" icon="fas fa-project-diagram" v-if="currentUser"
      >New Sheets</SidebarLink
    >
    <SidebarLink to="/admin" icon="fas fa-tools" v-if="showAdminBoard">Settings</SidebarLink>
    <SidebarLink to="/login" icon="fa-solid fa-right-to-bracket" v-if="!currentUser"
      >Login</SidebarLink
    >
    <SidebarLink to="/register" icon="fas fa-users" v-if="!currentUser">Register</SidebarLink>

    <template v-if="currentUser">
      <SidebarLink to="/profile" icon="fas fa-user"> {{ currentUser.username }} </SidebarLink>
      <SidebarLink to="/home" @click.prevent="logOut" icon="fas fa-sign-out-alt"
        >LogOut</SidebarLink
      >
    </template>

    <span class="collapse-icon" :class="{ 'rotate-180': collapsed }" @click="toggleSidebar">
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #000080;
  --sidebar-item-hover: #006fbf;
  --sidebar-item-active: #006faf;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.sidebar .collapsed {
  font-size: 25px;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
