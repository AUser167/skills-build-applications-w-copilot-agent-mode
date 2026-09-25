import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, unique: true, trim: true },
    members: { type: [String], required: true, default: [] },
    totalPoints: { type: Number, required: true, min: 0, default: 0 },
  },
  { timestamps: true },
);

export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
