import mongoose from 'mongoose';

const authSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  passwordHash: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true, // Ensures one-to-one mapping
  }
}, { timestamps: true });

export const Auth = mongoose.model('Auth', authSchema);
