import mongoose from 'mongoose';

const MaskSchema = new mongoose.Schema({
  name: String,
  description: String,
  images: [String],
  pdfManualUrl: String,
  videoIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
  productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  isPublished: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Mask', MaskSchema);
