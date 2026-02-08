import mongoose from 'mongoose';
import multer from 'multer';

// Use memory storage for multer (we'll manually save to GridFS)
const storage = multer.memoryStorage();

// Function to get GridFS bucket
export const getGridFSBucket = () => {
    const db = mongoose.connection.db;
    return new mongoose.mongo.GridFSBucket(db, {
        bucketName: 'uploads'
    });
};

export default storage;
