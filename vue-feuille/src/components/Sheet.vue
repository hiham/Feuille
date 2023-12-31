<template>
  <div class="sheet-details">
    <h2 class="sheet-card-details">Sheet Table</h2>
    <div class="table-wrapper">
      <table class="sheet-table">
        <thead>
          <tr>
            <th v-for="column in columns" :key="column.index">{{ column.name }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="row.index">
            <td v-for="column in columns" :key="column.index">
              <input v-model="row[column.field]" @input="handleCellInput(row, column.field)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button @click="loadData">Load</button>
    <button @click="saveData">Save</button>
  </div>
</template>

<script>
import FeuilleService from '../services/feuille.service'

export default {
  data() {
    return {
      columns: Array.from({ length: 100 }, (_, index) => ({
        index: index + 1,
        name: `Column ${index + 1}`,
        field: `col${index + 1}`
      })),
      rows: Array.from({ length: 50 }, (_, rowIndex) => ({
        index: rowIndex + 1,
        ...Array.from({ length: 100 }, (_, colIndex) => ({
          [`col${colIndex + 1}`]: ``
        })).reduce((acc, col) => ({ ...acc, ...col }), {})
      })),
      cellContents: []
    }
  },
  methods: {
    handleCellInput(row, field) {
      console.log(`Editing cell in row ${row.index}, column ${field}`)
    },
    saveData() {
      const updatedSheetData = {
        cells: this.rows.map((row) => ({ ...row }))
      }
      const sheetId = this.$route.params.id
      FeuilleService.updateSheet(sheetId, updatedSheetData)
        .then((response) => {
          console.log('Sheet updated:', response.data)
        })
        .catch((error) => {
          console.error('Error updating sheet:', error)
        })
      console.log('Data saved:', updatedSheetData)
    },
    loadData() {
      const sheetId = this.$route.params.id
      FeuilleService.getSheetById(sheetId)
        .then((response) => {
          const cellsData = response.data.cells || []
          cellsData.forEach((cell) => {
            const rowIndex = cell.index - 1
            Object.keys(cell).forEach((field) => {
              if (field !== 'index') {
                const colIndex = parseInt(field.replace('col', ''), 10) - 1
                this.rows[rowIndex][`col${colIndex + 1}`] = cell[field]
              }
            })
          })

          console.log('Sheet data loaded:', cellsData)
        })
        .catch((error) => {
          console.error('Error loading sheet data:', error)
        })
    }
  }
}
</script>

<style>
.sheet-table th:nth-child(19) {
  background-color: #e91e63;
  color: white;
}

.sheet-details {
  width: 80%;
  margin: 0 auto;
}

.table-wrapper {
  overflow-x: auto;
  max-width: 100%;
  max-height: 800px;
  overflow-y: auto;
}

.sheet-table {
  width: 100%;
  border-collapse: collapse;
}

.sheet-table th {
  background-color: #f0f0f0;
  padding: 10px;
  font-weight: bold;
  white-space: nowrap;
  min-width: 100px;
}

.sheet-table th:nth-child(1) {
  min-width: 200px;
}

.sheet-table th:nth-child(2) {
  min-width: 250px;
}

.sheet-table th:nth-child(3) {
  min-width: 150px;
}

.sheet-table td {
  padding: 10px;
  border: 1px solid #ccc;
  min-width: 100px;
}

button {
  margin-top: 10px;
  margin-right: 10px;
  padding: 15px 30px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;
}

button:hover {
  background-color: #45a049;
}
</style>
