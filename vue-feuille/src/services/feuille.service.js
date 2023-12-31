import http from '../http-common'

class FeuilleService {
  createSheet(user, sheetName) {
    const numberOfColumns = 100
    const cells = Array.from({ length: 50 }, (_, i) => {
      const cellObject = { index: i + 1 }
      for (let colIndex = 1; colIndex <= numberOfColumns; colIndex++) {
        cellObject[`col${colIndex}`] = ''
      }

      return cellObject
    })
    return http
      .post('/sheets', {
        author: user.username,
        name: sheetName.name,
        sharedAuthor: [''],
        cells: cells
      })
      .then((response) => {
        localStorage.setItem('sheet', JSON.stringify(response.data))
        return response
      })
  }

  getAllSheets() {
    try {
      const response = http.get(`/sheets`)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data : error.message
    }
  }

  getSheetById(sheetId) {
    try {
      const response = http.get(`/sheets/${sheetId}`)
      return response
    } catch (error) {
      throw error.response ? error.response.data : error.message
    }
  }

  updateSheet(sheetId, updatedSheetData) {
    try {
      const response = http.put(`/sheets/${sheetId}`, updatedSheetData)
      return response
    } catch (error) {
      throw error.response ? error.response.data : error.message
    }
  }

  deleteSheet(sheetId) {
    try {
      const response = http.delete(`/sheets/${sheetId}`)
      return response.data
    } catch (error) {
      throw error.response ? error.response.data : error.message
    }
  }

  getSheetsByAuthor(authorName) {
    try {
      const response = http.get(`/sheets/author/${authorName}`)
      return response
    } catch (error) {
      throw error.response ? error.response.data : error.message
    }
  }

  getSharedSheets(user) {
    try {
      const response = http.get(`/sheets/shared/${user}`)
      return response
    } catch (error) {
      throw error.response ? error.response.data : error.message
    }
  }
}

export default new FeuilleService()
