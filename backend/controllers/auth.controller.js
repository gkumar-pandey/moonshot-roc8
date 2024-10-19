import User from "../model/user.model";
import { hashPassword, comparePassword, generateToken } from "../utils";

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
