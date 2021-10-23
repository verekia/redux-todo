import { todos } from '../../../data.js'

export default async (req, res) => {
    const httpMethod = req.method;
    const todoId = req.query.todoId;
    const { content, done, id } = req.body;
    const result = todos.filter((todo) => todo.id === parseInt(todoId))
    switch (httpMethod) {
        case 'GET':
            if (result.length > 0) {
                res.status(200).json(result[0]);
            } else {
                res.status(404).json({ message: `Todo with id: ${todoId} not found` })
            }
            break;
        case 'PUT':
            res.status(200).json({
                content: content,
                done: done,
                id: id
            });
            break;
        case 'DELETE':
            res.status(200).json(result[0]);
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(404).json({ message: `Todo with id: ${todoId} not found` })
    }
}