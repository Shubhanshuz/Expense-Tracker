const USER = require("../models/user");

const express = require('express');

const router = express.Router();

router.route('/api')
.get(async (req,res) => {
    const expenses = await USER.find({});
    res.status(201).json(expenses);
})
.post(async (req,res) => {
    const body = req.body;
    if (!body || !body.expense || !body.amount) res.status(404).json({err : 'Send Complete'});
    else {
        USER.create({
            expense : body.expense,
            amount : body.amount
        });
        res.status(201).json({msg : 'Good Done'});
    }
})
.delete(async (req,res) => {
    const id = req.body.id;
    USER.findOneAndDelete({_id : id}).then(() => {
        res.status(201).json({msg : 'Deleted'});
    })
})
.patch(async (req,res) => {
    const id = req.body.id;
    await USER.findOneAndUpdate({_id : id},{
        expense : req.body.expense,
        amount : req.body.amount
    }).then(() => {
        res.status(201).json({msg : 'Updated'});
    });
})

module.exports = router;