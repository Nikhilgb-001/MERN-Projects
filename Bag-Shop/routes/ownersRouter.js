const express = require("express");
const router = express.Router();
const ownerModel = require('../models/owner-model');

if (process.env.NODE_ENV === 'development') {
    router.post('/create', async (req, res) => {
        let owenrs = await ownerModel.find();
        if (owenrs.length > 0) {
            return res
                .status(504)
                .send("You can't create a new owner...")
        }

        let { fullname, email, password } = req.body;

        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
        })

        res.status(201)
        .send(createdOwner);
    });
}

console.log(process.env.NODE_ENV);

router.get('/', (req, res) => {
    res.send("hey it's working in owners");
});

module.exports = router;