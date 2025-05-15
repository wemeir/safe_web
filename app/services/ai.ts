import axios from "../config/api"
import { aiMessage} from "../types/ai"


export const getAllAIMessage  = async () => {
    const res =(await axios.get<aiMessage[]>("/ai")).data
    return res
}

export const addAllAIMessage  = async ({content, type}:aiMessage) => {
    return await axios.post<aiMessage[]>("/ai", {content, type})
}

