import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

import env from './config/env.js';


import userRoutes from './routes/user.routes.js';
import maskRoutes from './routes/mask.routes.js';
import productRoutes from './routes/product.routes.js';
import authRoutes from './routes/auth.routes.js';
import adminRoutes from './routes/admin.routes.js';


const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/masks', maskRoutes);
app.use('/api/products', productRoutes);

app.use('/api/admin', adminRoutes);






mongoose.connect(env.mongoUri)
  .then(() => console.log('We successfully penetrated mongo'))
  .catch(err => console.error('Mongo error:', err));


app.listen(env.port, () => {
  console.log(`Server likes: ${env.port}`);
});

