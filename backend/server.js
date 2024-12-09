const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 5000;

const corsOptions = {
  origin: [
    "http://localhost:3000", // Local development
    "https://b5rd75rr-3000.inc1.devtunnels.ms", // Tunnel URL
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const excelFilePath = path.join(__dirname, "data", "queries.xlsx");

// Create a new Excel file with headers if it doesn't exist
async function initializeExcelFile() {
  const dataDir = path.join(__dirname, "data");
  if (!fs.existsSync(dataDir)) {
    // Create the 'data' directory if it doesn't exist
    fs.mkdirSync(dataDir);
  }

  if (!fs.existsSync(excelFilePath)) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Queries");
    worksheet.columns = [
      { header: "First Name", key: "firstName", width: 15 },
      { header: "Last Name", key: "lastName", width: 15 },
      { header: "Email", key: "email", width: 25 },
      { header: "Mobile", key: "mobile", width: 15 },
      { header: "Message", key: "message", width: 40 },
      { header: "Answer", key: "answer", width: 40 }, // Empty column for responses
    ];
    await workbook.xlsx.writeFile(excelFilePath);
    console.log("Excel file initialized with headers.");
  }
}

// Call the initialize function once at startup
async function startServer() {
  try {
    await initializeExcelFile(); // Ensure the Excel file is initialized before starting the server
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error initializing the Excel file:", error);
  }
}

// Your existing writeDataToExcel function
async function writeDataToExcel(data) {
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFilePath);
    let worksheet = workbook.getWorksheet("Queries");
    if (!worksheet) {
      worksheet = workbook.addWorksheet("Queries");
    }
    worksheet.addRow(data);
    await workbook.xlsx.writeFile(excelFilePath);
    console.log("Data written successfully.");
  } catch (error) {
    console.error("Error saving query:", error);
    throw error;
  }
}

app.post("/api/submit-query", async (req, res) => {
  const { firstName, lastName, email, mobile, message } = req.body;
  const data = [firstName, lastName, email, mobile, message];
  try {
    await writeDataToExcel(data);
    res.status(200).json({ message: "Query saved successfully to Excel" });
  } catch (error) {
    res.status(500).json({ message: "Error saving query to Excel" });
  }
});

// Start the server after the Excel file is initialized
startServer();

// async function writeDataToExcel(data) {
//   try {
//     console.log("Data received by writeDataToExcel:", data); // Log incoming data
//     const workbook = new ExcelJS.Workbook();
//     await workbook.xlsx.readFile(excelFilePath);
//     const worksheet = workbook.getWorksheet("Queries");

//     console.log("Adding row to Excel:", data);

//     // Directly add row without `commit()`
//     worksheet.addRow(data);

//     await workbook.xlsx.writeFile(excelFilePath);
//     console.log("Data written to Excel successfully.");
//   } catch (error) {
//     console.error("Error saving query:", error);
//     throw error;
//   }
// }
