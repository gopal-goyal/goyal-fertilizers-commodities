const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = 8000;

const corsOptions = {
  origin: "http://localhost:3000", // Update with the URL of your React app
  methods: ["GET", "POST", "OPTIONS"], // Specify allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
  optionsSuccessStatus: 200, // Set a successful response code for OPTIONS requests
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const excelFilePath = path.join(__dirname, "data", "queries.xlsx");

// Create a new Excel file with headers if it doesn't exist
async function initializeExcelFile() {
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
initializeExcelFile();

async function writeDataToExcel(data) {
  try {
    const workbook = new ExcelJS.Workbook(); // initialising workbook object

    console.log(`Loading workbook... ${workbook}`);

    // Printing excel file path
    console.log(excelFilePath);
    await workbook.xlsx.readFile(excelFilePath);
    console.log("Workbook loaded.");

    let worksheet = workbook.getWorksheet("Queries");
    if (!worksheet) {
      console.log("Worksheet not found, creating new one.");
      worksheet = workbook.addWorksheet("Queries");
    }

    console.log("Adding data:", data);
    worksheet.addRow(data);

    console.log("Writing to file...");
    await workbook.xlsx.writeFile(excelFilePath);
    console.log("Data written successfully.");
    // return true;
  } catch (error) {
    console.error("Error saving query:", error);
    throw error;
  }
}

app.post("/api/submit-query", async (req, res) => {
  const { firstName, lastName, email, mobile, message } = req.body;
  console.log("Received data:", req.body);
  data = [firstName, lastName, email, mobile, message];
  console.log(data);
  try {
    console.log(req.body);
    await writeDataToExcel(data);
    res.status(200).json({ message: "Query saved successfully to Excel" });
  } catch (error) {
    res.status(500).json({ message: "Error saving query to Excel" });
  }
});

initializeExcelFile().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

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
