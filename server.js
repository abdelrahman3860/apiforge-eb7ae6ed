const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.listen(process.env.PORT || 3000);