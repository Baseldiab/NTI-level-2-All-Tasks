const mongoose = require("mongoose")
const validator = require("validator")
const userModel = mongoose.model("user", {
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        validate(value) {
            if(!validator.isEmail(value))throw new Error("Invalid Email")
        }

    }
})

module.exports = userModel