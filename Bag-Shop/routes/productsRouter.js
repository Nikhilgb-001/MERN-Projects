const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send("hey it's working in products");
});

module.exports = router;