const {model, Schema} = require("mongoose");

const UserSchema = new Schema({
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = model("User", UserSchema);