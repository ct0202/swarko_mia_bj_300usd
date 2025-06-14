// models/product.model.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  imageUrl: String,
  link: String,
  category: String,
  isPublished: { type: Boolean, default: false },
  relatedMasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mask' }]
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);
