export interface Subscriber {
    id: number
    email: string
    status: number
    created_at: string
    updated_at: string
}

export interface SubscribeRequest {
    email: string
}

export interface SubscribeResponse {
    success: boolean
    message: string
    data: Subscriber
    status: number
    error_message: string
}
