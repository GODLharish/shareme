import multer from 'multer';
import path from 'path';
import gridfsStorage from '../config/gridfs.config.js';

const allowedExtensions = [
  '.jpg', '.jpeg', '.webp', '.png', '.gif', '.svg',
  '.mp4', '.avi', '.mov', '.mkv', '.mk3d', '.mks', '.mka', '.webm',
  '.pdf', '.doc', '.docx', '.txt', '.zip', '.rar', '.7z'
];

const upload = multer({
  storage: gridfsStorage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100 MB limit
  fileFilter: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      return cb(new Error(`❌ Unsupported file type: ${ext}`));
    }
    cb(null, true);
  }
});

export default upload;
