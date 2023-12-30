import http from "../http-common";

class FeuilleService {
    createSheet(user,sheetName) {
      return http
        .post('/sheets', {
          author : user.username,
          name : sheetName.name
        })
        .then(response => {
          localStorage.setItem('sheet', JSON.stringify(response.data));
          return response;
        });
    }
    
    getAllSheets(){
    try {
      const response = http.get(`/sheets`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }

  getSheetById(sheetId){
    try {
      const response = http.get(`/sheets/${sheetId}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }

  updateSheet (sheetId, updatedSheetData){
    try {
      const response = http.put(`/sheets/${sheetId}`, updatedSheetData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }

  deleteSheet(sheetId){
    try {
      const response = http.delete(`/sheets/${sheetId}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }

  getSheetsByAuthor(authorName){
    try {
      const response = http.get(`/sheets/author/${authorName}`);
      return response;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }

  getSharedSheets(user){
    try {
      const response = http.get(`/sheets/shared/${user}`);
      return response;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
}

export default new FeuilleService();
