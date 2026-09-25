import mongoose from 'mongoose';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

export const connectDatabase = async (): Promise<void> => {
  await mongoose.connect(connectionString);
  console.log('Connected to octofit_db');
};

export const disconnectDatabase = async (): Promise<void> => {
  await mongoose.disconnect();
};

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
