import bcryptjs from 'bcryptjs';
import Users from '../models/Users.js';
import errorHandler from '../utils/error.js';

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'Unauthorized request'));
  }
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updateUser = await Users.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'Unauthorized request'));
  }
  try {
    await Users.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted...');
  } catch (err) {
    next(err);
  }
};

export const checkUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'Unauthorized request'));
  }
  try {
    console.log(req.params.username);
    const checkUsername = await Users.findOne({ username: req.params.username });
    if (checkUsername) return res.status(409).json({ success: false, message: 'username is already taken.' });
    return res.status(202).json({ success: true, message: 'username is available.' });
  } catch (err) {
    next(err);
  }
};

export const checkEmail = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'Unauthorized request'));
  }
  try {
    const checkUserEmail = await Users.findOne({ email: req.params.email });
    if (checkUserEmail) return res.status(409).json({ success: false, message: 'email is already taken.' });
    return res.status(202).json({ success: true, message: 'email is available.' });
  } catch (err) {
    next(err);
  }
};
