import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // באיזו תיקייה שומרים את הקבצים
    },
    filename: (req, file, cb) => {
        cb(null, `${new Date().getTime()}_${file.originalname}`);
    }
});


export const upload = multer({ storage });