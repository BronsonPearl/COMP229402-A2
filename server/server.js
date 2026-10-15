import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file

import express from 'express'; // ES6 and newer javascript

import authMiddleware from './middlewares/auth.js';

import projectsRoutes from './routes/project.routes.js';
import userRoutes from './routes/user.routes.js';
import qualificationsRoutes from './routes/qualifications.routes.js';
import contactsRoutes from './routes/contacts.routes.js';

// Establish DB Connection
mongoose.connect(process.env.MONGO_URI);
const connection = mongoose.connection; 
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

const app = express(); 

app.use(express.json()); // for parsing application/json

app.use('/projects', authMiddleware, projectsRoutes);
app.use('/users', userRoutes);
app.use('/qualifications', qualificationsRoutes);
app.use('/contacts', contactsRoutes);

app.listen(3000);

console.log('Server is running on http://localhost:3000');
