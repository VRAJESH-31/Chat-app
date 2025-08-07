import User from '../models/user.modal.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/utils.js';


export const signup = async (req, res) => {
    const { username, email, password } = req.body
    try {
        if (!username || !email || !password) {
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

export const login = (req, res) => {
    res.send('Login route');
};

export const logout = (req, res) => {
    res.send('Logout route');
};