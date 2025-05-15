"use-client";

import { useMutation, useQuery } from "@tanstack/react-query"
import { addAllAIMessage, getAllAIMessage } from "@/app/services/ai";


export const useGetAllAIMessage = () => {
    return useQuery({ queryFn: getAllAIMessage, queryKey: ["ai"] })
}

export const useAddAIMessage = () => {
    return useMutation({ mutationKey: ["ai"], mutationFn: addAllAIMessage })
}