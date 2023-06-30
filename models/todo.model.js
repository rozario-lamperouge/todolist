const mongoose = require('mongoose')
const UserModel = require('./user.model')

const Schema = mongoose.Schema

const TodoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

const TodoModel = mongoose.model("Todos", TodoSchema);

module.exports = TodoModel;