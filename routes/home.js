/*==================================================
/routes/home.js

It is a Home page used to test Express application.
==================================================*/
const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "EXPRESS TEST",
    message: "The Express application is working!",
  });
});

module.exports = router;