<template>
  <div class="sheet-lists">
    <!-- Personal Sheet List -->
    <div class="sheet-list">
      <div class="sheet-list-header">
        <h3 class="sheet-list-title">Personal :</h3>
        <v-btn @click="togglesheetList('PERSONAL')" class="toggle-button">
          {{ showsheetList.PERSONAL ? 'Hide' : 'Show' }}
          <v-icon>{{ showsheetList.PERSONAL ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </div>
      <ul v-if="showsheetList.PERSONAL" class="sheet-items">
        <li v-for="sheet in sheetLists.PERSONAL" :key="sheet.id" class="sheet-card">
          Name : {{ sheet.name }}
          <router-link :to="`/sheet/${sheet.id}`" class="icon-link"
            ><i class="fas fa-search"></i
          ></router-link>
          <button @click="deleteSheet(sheet.id)">
            <i class="fa-solid fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>

    <!-- Shared Sheet List -->
    <div class="sheet-list">
      <div class="sheet-list-header">
        <h3 class="sheet-list-title">Shared :</h3>
        <v-btn @click="togglesheetList('SHARED')" class="toggle-button">
          {{ showsheetList.SHARED ? 'Hide' : 'Show' }}
          <v-icon>{{ showsheetList.SHARED ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </div>
      <ul v-if="showsheetList.SHARED" class="sheet-items">
        <li v-for="sheet in sheetLists.SHARED" :key="sheet.id" class="sheet-card">
          Name : {{ sheet.name }} | Shared Author : {{ sheet.sharedAuthorCount }}
          <router-link :to="`/sheet/${sheet.id}`" class="icon-link"
            ><i class="fas fa-search"></i
          ></router-link>
          <div class="tooltip">
            <i class="fa-solid fa-people-group"></i>
            <span class="tooltiptext">{{ sheet.sharedAuthor }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import FeuilleService from '../services/feuille.service'

export default {
  setup() {
    const sheetLists = reactive({
      PERSONAL: [],
      SHARED: []
    })

    const showsheetList = reactive({
      PERSONAL: false,
      SHARED: false
    })

    const togglesheetList = function (state) {
      showsheetList[state] = !showsheetList[state]
    }

    async function fetchData() {
      const user = JSON.parse(localStorage.getItem('user'))
      try {
        const personalSheets = await FeuilleService.getSheetsByAuthor(user.username)
        const sharedSheets = await FeuilleService.getSharedSheets(user.username)
        sheetLists.PERSONAL = personalSheets.data.map((sheet) => ({
          name: sheet.name,
          id: sheet.id
        }))
        sheetLists.SHARED = sharedSheets.data.map((sheet) => ({
          name: sheet.name,
          sharedAuthorCount: sheet.sharedAuthor.length,
          id: sheet.id,
          sharedAuthor: sheet.sharedAuthor
        }))
        console.log('Personal Sheets:', sheetLists.PERSONAL)
        console.log('Shared Sheets:', sheetLists.SHARED)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    onMounted(() => {
      fetchData()
    })

    return {
      sheetLists,
      showsheetList,
      togglesheetList
    }
  },
  methods: {
    async deleteSheet(sheetId) {
      try {
        await FeuilleService.deleteSheet(sheetId)
        const indexToDelete = this.sheetLists.PERSONAL.findIndex((sheet) => sheet.id === sheetId)
        if (indexToDelete !== -1) {
          this.sheetLists.PERSONAL.splice(indexToDelete, 1)
        }
        console.log(`Sheet with ID ${sheetId} deleted successfully`)
      } catch (error) {
        console.error('Error deleting sheet:', error)
      }
    }
  }
}
</script>

<style>
.sheet-list {
  margin: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
}

.sheet-card {
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.sheet-card h3 {
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: bold;
}

.sheet-items {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sheet-items li {
  margin-bottom: 5px;
}

.v-btn {
  background-color: #006fbf;
  color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 14px;
}

.v-icon {
  margin-left: 5px;
  font-size: 16px;
}

.total-budget {
  font-size: 14px;
  color: #888;
}

.sheet-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  background-color: #000080;
  color: #fff;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  background-color: #ffffff;
  color: #000080;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sheet-list-title {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.sheet-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.icon-link {
  margin-right: 10px;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #000080;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: relative;
  z-index: 1;
  top: 100%;
  left: 50%;
  margin-left: -60px;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
