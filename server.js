const express = require("express");
const path = require("path");

const app = express();

// static files (CSS)
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", require("./routes/home"));
app.use("/panel", require("./routes/panel"));
app.use("/contact", require("./routes/contact"));
app.use("/about", require("./routes/about"));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
