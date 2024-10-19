import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * @description hash a plain text password using bcrypt
 * @param {String} password -The plain text password to hash
 * @returns {String} hashed password
 * @throws {Error} - If error occurs during hashing process.
 */
export const hashPassword = async password => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};
