import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    userId: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    durationMinutes: { type: Number, required: true, min: 0 },
    distanceKm: { type: Number, required: true, min: 0, default: 0 },
    calories: { type: Number, required: true, min: 0, default: 0 },
    completedAt: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true },
);

export const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
