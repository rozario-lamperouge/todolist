const TodoModel = require('../models/todo.model');


class TodoService {
    static async createTodo(userId, title, desc) {
        try {
            const createtodo = await TodoModel.create({ userId, title, desc });
            return createtodo;
        }
        catch (err) {
            console.log(err);
        }
    }

    static async getTodos(userId) {
        try {
            const tododata = await TodoModel.find({ userId });
            return tododata;
        } catch (err) {
            console.log(err);
        }
    }

    static async deleteTodo(id) {
        try {
            const deleted = await TodoModel.findOneAndDelete({ _id: id });
            return deleted;
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = TodoService;