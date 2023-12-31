const fs = require("fs/promises");
const path = require("path");
const { DATE } = require("sequelize");

const dataFolderPath = path.join(__dirname, "..", "data");

async function readDataFile(filename) {
  try {
    const filePath = path.join(dataFolderPath, filename);
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

async function writeDataFile(filename, data) {
  const filePath = path.join(dataFolderPath, filename);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}

exports.createSheet = async (req, res) => {
  try {
    const sheets = await readDataFile("sheets.json");
    const year = new Date().getFullYear();
    const authorName = req.body.author;
    const randomNumber = Math.floor(Math.random() * 1000);
    const newSheet = { id: `${year}${authorName}${randomNumber}`, ...req.body };
    sheets.push(newSheet);
    await writeDataFile("sheets.json", sheets);
    res.json(newSheet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllSheets = async (req, res) => {
  try {
    const sheets = await readDataFile("sheets.json");
    res.json(sheets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSheetById = async (req, res) => {
  try {
    const sheets = await readDataFile("sheets.json");
    const sheet = sheets.find((s) => s.id === req.params.id);
    res.json(sheet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSheet = async (req, res) => {
  try {
    const sheets = await readDataFile("sheets.json");
    const index = sheets.findIndex((s) => s.id === req.params.id);
    if (index !== -1) {
      sheets[index] = { ...sheets[index], ...req.body };
      await writeDataFile("sheets.json", sheets);
      res.json(sheets[index]);
    } else {
      res.status(404).json({ error: "Sheet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSheet = async (req, res) => {
  try {
    const sheets = await readDataFile("sheets.json");
    const index = sheets.findIndex((s) => s.id === req.params.id);
    if (index !== -1) {
      const deletedSheet = sheets.splice(index, 1);
      await writeDataFile("sheets.json", sheets);
      res.json(deletedSheet[0]);
    } else {
      res.status(404).json({ error: "Sheet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSheetsByAuthor = async (req, res) => {
  try {
    const sheets = await readDataFile("sheets.json");
    const authorName = req.params.author;
    const authorSheets = sheets.filter((sheet) => sheet.author === authorName);
    res.json(authorSheets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSharedSheets = async (req, res) => {
  try {
    const sheets = await readDataFile("sheets.json");
    const user = req.params.user;
    const sharedSheets = sheets.filter((sheet) =>
      sheet.sharedAuthor.includes(user)
    );
    res.json(sharedSheets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
