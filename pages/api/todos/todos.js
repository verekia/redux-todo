import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
// const todos = await PrismaClient.todo.findMany
export default async (req, res) => {
    if (req.method === 'GET') {
        const todoData = JSON.parse(req.body)
        const savedTodo = await prisma.todo.create({
            data: todoData
        })
        res.json(savedTodo);
    } else if (req.method === 'DELETE') {
        const todoId = JSON.parse(req.body)
        const todoDeleted = await prisma.todo.delete({
            where: {
                id: todoId
            }
        })
        res.status(200).json(todoDeleted)
    } else if (req.method === 'PATCH') {
        const todoId = JSON.parse(req.body)
        const todoUpdated = await prisma.todo.update({
            where: {
                id: todoId
            },
            data: {
                done: true
            }
        })
        res.status(200).json(todoUpdated)
    } else if (req.method === 'POST') {
        let newTodo = JSON.parse(req.body)
        const todo = await prisma.todo.create({
            data: newTodo
        })
        res.status(200).json(todo)
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
}