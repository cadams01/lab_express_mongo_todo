var express = require('express')
var router = express.Router()
var cors = require('cors');

// Getting the Todo Controller that we just created
var ToDoController = require('../../controllers/todo.controller.js');

router.use(cors())

// Map each API to the Controller FUnctions
router.get('/', ToDoController.getTodos)

router.post('/', ToDoController.createTodo)

router.put('/', ToDoController.updateTodo)

router.options('/:id');
router.options('/');
router.delete('/:id', ToDoController.removeTodo)


// Export the Router
module.exports = router;