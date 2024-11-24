import { create } from 'zustand';

interface User {
  email: string;
  id: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  signIn: async (email: string, password: string) => {
    // For demo purposes, we'll use a simple check
    if (email === import.meta.env.VITE_ADMIN_EMAIL && password === import.meta.env.VITE_ADMIN_PASSWORD) {
      set({ user: { email, id: '1' } });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  signOut: async () => {
    set({ user: null });
  },
}));