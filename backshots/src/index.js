import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

import env from './config/env.js';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';


const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);






mongoose.connect(env.mongoUri)
  .then(() => console.log('We successfully penetrated mongo'))
  .catch(err => console.error('Mongo error:', err));


app.listen(env.port, () => {
  console.log(`Server likes: ${env.port}`);
});

