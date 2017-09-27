// Dependencies
var mysql = require("mysql");

// MySQL DB Connection Information
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Temple42captain",
  database: "burgers_db"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM use
module.exports = connection;