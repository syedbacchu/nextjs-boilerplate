import { create } from 'zustand'
import {User} from "@/features/auth/types";

interface AuthState {
    user: User | null
    loading: boolean
    setUser: (user: User | null) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    loading: true, // 👈 starts true
    setUser: (user) => set({ user, loading: false }),
    logout: () => set({ user: null, loading: false }),
}))