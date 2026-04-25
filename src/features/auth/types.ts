export interface User {
    id: number
    name: string
    username: string
    email?: string | null
    phone?: string | null
    image?: string | null
}