import axios from "../config/api"
import { Masseages } from "../types/messages"


export const addAvhivment = async (data: Masseages) => {
    return await axios.post("/messages", data)
}

export const getAchivment = async ()=>
{
    return (await axios.get<Masseages[]>("/messages")).data
}