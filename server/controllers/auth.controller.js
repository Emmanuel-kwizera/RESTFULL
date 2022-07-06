const Admin = require("../models/admin.model");

module.exports.register = async (req, res) => {
  try {
    const { names, email, phone, nationalId, password } = req.body;

    const userWithEmail = await Admin.findOne({ email });
    if (userWithEmail) {
      return res.status(400).json({
        success: false,
        message: "Admin with same email already exists",
      });
    }

    const userWithUsername = await User.findOne({ username });
    if (userWithUsername) {
      return res.status(400).json({
        success: false,
        message: "Admin with same username already exists",
      });
    }

    let user = await Admin.create({
      names,
      email,
      phone,
      nationalId,
      password,
    });

    if (user) {
      return res.status(201).json({
        success: true,
        data: user,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User not created",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await Admin.findOne({ username });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = user.getSignedJwtToken();
    return res.status(200).json({
      success: true,
      token,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};