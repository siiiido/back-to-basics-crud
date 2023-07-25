import mongoose from 'mongoose';
const MONGODB_URL: string =
  process.env.DATABASE_URL || 'mongodb://localhost/tsmernamazonadb';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);

    console.log('mongoose connected');
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
