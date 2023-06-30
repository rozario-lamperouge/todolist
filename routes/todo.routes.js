const express = require('express')
const todocont = require('../controller/todo.controller')

const router = express.Router()

router.post('/addtodo', todocont.createTodo);
router.post('/gettodo', todocont.getTodo);
router.post('/deletetodo', todocont.deleteTodo);

module.exports = router;