import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req, res) => {
    if (req.method !== 'POST' && req.method !== 'DELETE') {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const todoData = JSON.parse(req.body)
    const savedTodo = await prisma.todo.create({
        data: todoData
    })
    res.json(savedTodo);
}