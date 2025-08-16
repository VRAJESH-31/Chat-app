import { create } from 'zustand';
import axiosInstance from '../lib/axios.js';
import { toast } from 'react-hot-toast';

const useAuth = create((set, get) => ({
    authuser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,
    onlineUsers: [],

    // Check if user is authenticated
    checkAuth: async () => {
        try {
            const res = await axiosInstance.get('/auth/check');
            set({ authuser: res.data });
        } catch (error) {
            set({ authuser: null });
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    // Sign up user
    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authuser: res.data });
            toast.success("Account created successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Signup failed");
        } finally {
            set({ isSigningUp: false });
        }
    },

    // Log in user
    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({ authuser: res.data });
            toast.success("Logged in successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        } finally {
            set({ isLoggingIn: false });
        }
    },

    // Log out user
    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            set({ authuser: null });
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Logout failed");
        }
    },

    updateProfile: async (data) => {
                set({ isUpdatingProfile: true });
                try {
                    const res = await axiosInstance.put("/auth/update-profile", data);
                    set({ authUser: res.data });
                    toast.success("Profile updated successfully");
                } catch (error) {
                    if (error.response && error.response.status === 413) {
                        toast.error("File is too large. Max 15mb allowed.");
                    } else if (error.response?.data?.message) {
                        toast.error(error.response.data.message);
                    } else {
                        toast.error("Something went wrong.");
                    }
                } finally {
                    set({ isUpdatingProfile: false });
                }
            },
}));

export default useAuth;
