import { Schema, models, model } from 'mongoose'

const messageSchema = new Schema({
    date: Number,
    userId: String,
    content: String,
    type: String,
    tags: { type: [String], default: [] }
})

export const message = models.message || model('message', messageSchema)