import mongoose from 'mongoose';

const StepSchema = new mongoose.Schema({
  title: String,
  description: String,
  mediaUrl: String,  // image, video, pdf
});

const MaskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    description: String,
    images: [String], // URLs of uploaded images
    steps: [StepSchema], // Instructions
    videoReviewUrl: String,
    recommendedProducts: [String], // maybe array of product IDs or names
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Mask = mongoose.model('Mask', MaskSchema);
