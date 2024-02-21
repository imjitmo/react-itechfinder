import bcryptjs from 'bcryptjs';
import Users from '../models/Users.js';
import errorHandler from '../utils/error.js';

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'Unauthorized request'));
  }
  const { email, username } = req.body;
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const checkEmail = await Users.findOne({ email });
    const checkUsername = await Users.findOne({ username });
    if (checkEmail) {
      res.status(500).json({ success: false, message: 'E-mail already taken' });
      return;
    }
    if (checkUsername) {
      res.status(500).json({ success: false, message: 'Username already taken' });
      return;
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
