import mongoose from 'mongoose';

const leaderboardEntrySchema = new mongoose.Schema(
  {
    rank: { type: Number, required: true, min: 1 },
    userId: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    points: { type: Number, required: true, min: 0, default: 0 },
  },
  { timestamps: true },
);

leaderboardEntrySchema.index({ points: -1 });

export const LeaderboardEntry =
  mongoose.models.LeaderboardEntry || mongoose.model('LeaderboardEntry', leaderboardEntrySchema);
