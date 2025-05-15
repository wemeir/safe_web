import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI!

if (!MONGODB_URI) throw new Error('Please define MONGODB_URI')

let isConnected = false

export const connectToDatabase = async () => {
    if (isConnected) return
    await mongoose.connect(MONGODB_URI, {
    })
    isConnected = true
}