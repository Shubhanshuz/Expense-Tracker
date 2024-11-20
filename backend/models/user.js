const mongoose = require('mongoose');

const expenseSchema = mongoose.Schema({
    expense : {
        type : String,
        required : true,
    },

    amount : {
        type : Number,
        required : true,
    }
});

const USER = mongoose.model('userExpense', expenseSchema);

module.exports = USER;