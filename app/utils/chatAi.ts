// controllers/chatController.ts
import { GoogleGenAI } from '@google/genai';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY, });
const MODEL_ID = 'gemini-2.0-flash-001';

// Map לשמירת הסשנים
const sessions = new Map<string, Awaited<ReturnType<typeof ai.chats.create>>>();

export const chat = async (req: { conversationId: string, message: string }) => {
    try {
        let { conversationId, message } = req as {
            conversationId?: string;
            message?: string;
        };

        if (!message) {
            return ""
        }

        let session = conversationId && sessions.get(conversationId);
        if (!session) {
            conversationId = uuidv4();
            session = await ai.chats.create({
                model: MODEL_ID, history: [
                    {
                        role: "user",
                        parts: [{ text: "You are a friendly assistant specialized in helping users manage stress. Always respond calmly and suggest breathing exercises when anger is detected." }]
                        
                    },
                ],
            });
            sessions.set(conversationId, session);
        }

        const response = await session.sendMessage({
            message
        });

        return response.text
    } catch (err: any) {
    }
};
