import z from "zod";

export type ActionState = {
    status?: "SUCCESS" | "ERROR";
    message: string;
    fieldErrors: Record<string, string[]> | undefined;
    payload?: FormData;
    timestamp: number;
}

export const EMPTY_ACTION_STATE: ActionState = {
    message: "",
    fieldErrors: {},
    timestamp: Date.now(),
}

export const toActionState = (status:ActionState['status'],message: string, payload?: FormData): ActionState => {
    return {
        message,
        status,
        fieldErrors: {},
        payload,
        timestamp: Date.now(),
    }
}

const fromErrorToActionState = (error: unknown, payload?: FormData): ActionState => {
    if(error instanceof z.ZodError) {
        return {
            message: error.issues[0]?.message ?? "Validation error",
            status: "ERROR",
            fieldErrors: error.flatten().fieldErrors,
            payload: payload,
            timestamp: Date.now(),
        }
    }else if(error instanceof Error) {
        return {
            message: error.message,
            status: "ERROR",
            fieldErrors: {},
            payload: payload,
            timestamp: Date.now(),
        }
    }else {
    return {
        message: "An unexpected error occurred",
        status: "ERROR",
        fieldErrors: {},
        payload: payload,
        timestamp: Date.now(),
    }
    }
}

export {fromErrorToActionState}