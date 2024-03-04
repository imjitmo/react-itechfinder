import Owners from '../models/Owners.js';
import Users from '../models/Users.js';
import errorHandler from '../utils/error.js';

export const ownerSetup = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'Unauthorized request'));
  }
  try {
    const checkOwner = await Owners.findOne({ userId: req.params.id, username: req.params.username });
    if (!checkOwner) {
      const newShop = new Owners({
        userId: req.params.id,
        username: req.params.username,
        shopName: req.body.shopName,
        ownerName: req.body.ownerName,
        shopAddress: {
          shopStreet: req.body.shopStreet,
          shopBarangay: req.body.shopBarangay,
        },
        shopType: req.body.shopType,
        gadgetList: req.body.gadgetList,
        permitNo: req.body.permitNo,
        permitPhoto: req.body.permitPhoto,
      });
      await newShop.save();
      const updateUser = await Users.findByIdAndUpdate(
        req.params.id,
        {
          isOwner: true,
        },
        { new: true }
      );
      const { password, ...rest } = updateUser._doc;
      res.status(200).json(rest);
    }
  } catch (err) {
    next(err);
  }
};

export const showShop = async (req, res, next) => {
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, 'Unauthorized request'));
  }
  try {
    const getShop = await Owners.findOne({ userId: req.params.id });
    console.log(getShop);
    res.status(201).json(getShop);
  } catch (err) {
    next(err);
  }
};
