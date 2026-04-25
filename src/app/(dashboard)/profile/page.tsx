'use client'

import { useAuthStore } from '@/features/auth'

export default function ProfilePage() {
    const { user, loading } = useAuthStore()

    if (loading) {
        return <p className="text-center mt-20">Loading...</p>
    }

    if (!user) {
        return <p className="text-center mt-20">No user found. Please login.</p>
    }

    return (
        <div className="max-w-md mx-auto mt-20 border rounded p-6">
            <h1 className="text-xl font-bold mb-4">Profile Page</h1>
            <p>Id : {user.id}</p>
            <p>Name : {user.name}</p>
            <p>UserName : {user.username}</p>
        </div>
    )
}