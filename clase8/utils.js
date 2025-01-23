import multer from "multer";
const __dirname = "c:/xampp/htdocs/coderhouse/72850/clase8";

const storage = multer.diskStorage({
    destination:function(req, file, cb) {                
        cb(null, __dirname + "/public/images")
    },
    filename:function(req, file, cb) {
        cb(null, file.originalname)
    }
})

export const uploader = multer({storage});
export default __dirname;