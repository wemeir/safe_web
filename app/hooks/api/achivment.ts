"use-client";

import { useMutation, useQuery } from "@tanstack/react-query"
import { addAvhivment, getAchivment } from "@/app/services/messages"


export const useaddAvhivment = () => {
    return useMutation({
        mutationFn: addAvhivment,
        mutationKey: ["achivment"]
    })
}

export const useGetAchivment = () => {
    return useQuery({
        queryFn: () => getAchivment(),
        queryKey: ["achivment"]
    })
}