const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerSchema } = require("swaggiffy");

const AdminSchema = new mongoose.Schema({
  names: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    unique: true,
  },
  nationalId: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 255,
  },
});

// Encrypt password using bcrypt
AdminSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  });
  
  // Sign JWT and return
  AdminSchema.methods.getSignedJwtToken = function () {
    return jwt.sign(
      { id: this._id, email: this.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      }
    );
  };
  
  // Match user entered password to hashed password in database
  AdminSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };
  
  registerSchema("Admin", AdminSchema, { orm: "mongoose" });
  
  module.exports = mongoose.model("Admin", AdminSchema);