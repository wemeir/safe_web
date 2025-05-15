import mongoose, { Schema, model, models } from 'mongoose'

const chatMessageSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['user', 'bot'],
            default: 'user',
        },
    },
    {
        timestamps: true,
    }
)

export const ChatMessage =
    models.ChatMessage || model('ChatMessage', chatMessageSchema)
