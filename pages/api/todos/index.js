// import { todos } from '../../../data.js'

export default async (req, res) => {
    const httpMethod = req.method;
    const { content, done, id } = req.body;
    switch (httpMethod) {
        case 'GET':
            res.status(200).json(todos);
            break;
        case 'POST':
            res.status(200).json({
                content: content,
                done: done,
                id: id
            });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${httpMethod} not allowed.`);
    }
}
