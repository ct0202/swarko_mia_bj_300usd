import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env';




const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/masks', require('./routes/mask.routes'));
app.use('/api/users', require('./routes/user.routes'));
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/videos', require('./routes/video.routes'));
app.use('/api/admin', require('./routes/admin.routes'));





// mongoose.connect(env.mongoUri)
//   .then(() => console.log('We successfully penetrated mongo'))
//   .catch(err => console.error('Mongo error:', err));


app.listen(env.port, () => {
  console.log(`Server likes: ${env.port}`);
});

