import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
        validate: { validator: function (value) { return value.includes("@") }, message: "Username must be correct form" }

    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other"],
        required: false
    },

    password: {
        type: String,
        required: true,
    },

    avatar: {
        type: String,
        required: true,
    },
    refreshToken: {
        type: String
    },

    coverimage: {
        type: String,
        required: true,
    },
}, { timestamps: true })

userSchema.pre("save", async function name(next) {
    if (!this.isModified("password")) {
        return next()
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
})
userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}
userSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        id: this._id,
        email: this.email,
        fullname: this.fullname,
        username: this.username
    },
        process.env.ACCESS_TOKEN,
        { expiresIn: process.env.EXPIRE_ACCESS_TOKEN }
    )
};
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        id: this._id,
    },
        process.env.REFRESH_TOKEN,
        { expiresIn: process.env.EXPIRE_REFRESH_TOKEN }
    )
};
export const User = mongoose.model("User", userSchema)