import { v2 as cloudinary } from "cloudinary";
import { asyncHandler } from "./asynchandler.js"
const cloudinaryupload = asyncHandler(async (localpath) => {
    try {
        if(!localpath){
            
            
        }
        const path = await cloudinary.uploader.upload(localpath);
    } catch (error) {
    }
})