const sheetsController = require("../controllers/feuille.controller");

module.exports = function (app) {
  app.post("/sheets", sheetsController.createSheet);

  app.get("/sheets", sheetsController.getAllSheets);

  app.get("/sheets/:id", sheetsController.getSheetById);

  app.put("/sheets/:id", sheetsController.updateSheet);

  app.delete("/sheets/:id", sheetsController.deleteSheet);

  app.get("/sheets/author/:author", sheetsController.getSheetsByAuthor);

  app.get("/sheets/shared/:user", sheetsController.getSharedSheets);
};
