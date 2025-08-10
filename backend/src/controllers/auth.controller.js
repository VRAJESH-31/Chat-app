import User from '../models/user.modal.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/utils.js';


export const signup = async (req, res) => {
    const { fullName, email, password } = req.body
    try {
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        const user = await User.findOne({ email });
        
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        if(newUser) {
            generateToken(newUser._id, res);
            await newUser.save();

            return res.status(201).json({
                _id: newUser._id, 
                username: newUser.fullName, 
                email: newUser.email,
                profilePic: newUser.profilePic,});
        } else {
            return res.status(400).json({ message: 'Invalid User Data' });
        }
    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        generateToken(user._id, res);

        return res.status(200).json({
            _id: user._id,
            username: user.fullName,
            email: user.email,
            profilePic: user.profilePic,
        });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const logout = (req, res) => {
    try {
        res.clearCookie('jwt');
        return res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error('Error during logout:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateProfile = async (req, res) => {
    c
}