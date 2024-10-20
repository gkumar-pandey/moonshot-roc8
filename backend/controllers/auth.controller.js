import User from "../model/user.model.js";
import {
  hashPassword,
  comparePassword,
  generateToken,
} from "../utils/index.js";

/**
 * @route POST /api/auth/signup
 * @description Handles user registration by creating a new account.
 * @param {Object} req - Express request object containing user data.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response indicating success or error.
 */
export const signupController = async (req, res) => {
  try {
    const { name, password, email } = req.body;
    if (!name || !password || !email) {
      return res
        .status(500)
        .json({ message: "username, password,email required." });
    }
    const isUserExist = await User.findOne({ email: email });
    if (isUserExist) {
      return res.status(500).json({ error: "User already exists" });
    }
    const hashedPassword = await hashPassword(password);
    const user = {
      name,
      email,
      password: hashedPassword,
    };
    // save user to database
    const newUser = new User(user);
    await newUser.save();
    // response with token
    const payloadForToken = { _id: newUser._id, email: newUser.email };
    const token = generateToken(payloadForToken);
    // hide password in response
    newUser.password = undefined;
    res.status(201).json({
      message: "signup successfully",
      user: newUser,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
    throw error;
  }
};

/**
 * @route POST /api/auth/login
 * @description Handles user authentication and login.
 * @param {Object} req - Express request object containing user credentials.
 * @param {Object} res - Express response object.
 * @returns {Object} JSON response indicating login success or failure.
 */
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //* check all required fields
    if (!email || !password) {
      return res.status(500).json({ message: "email & password required.." });
    }
    //* check user exist
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not exist." });
    }
    //* check password
    const isPassMatched = await comparePassword(
      password,
      existingUser.password
    );
    if (!isPassMatched) {
      return res.status(401).json({ message: "Password not matched!." });
    }

    //* generate token
    const payloadForToken = {
      _id: existingUser._id,
      email: existingUser.email,
    };
    const token = generateToken(payloadForToken);
    //* Hide password
    existingUser.password = undefined;
    res.status(200).json({
      message: "Login successfully",
      token,
      user: existingUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
    throw error;
  }
};
