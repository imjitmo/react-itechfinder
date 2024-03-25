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
    res.status(201).json(getShop);
  } catch (err) {
    next(err);
  }
};

export const viewActiveShop = async (req, res, next) => {
  console.log(req.query);
  const gadgetList =
    req.query.type === 'all'
      ? { $in: ['applephone', 'smartphone', 'laptop', 'mac', 'desktop', 'console', 'appliances'] }
      : req.query.type;

  const shopBarangay =
    req.query.loc === 'all'
      ? {
          $in: [
            'bagumbayan',
            'cabog-cabog',
            'munting batangas',
            'cataning',
            'central',
            'cupang proper',
            'cupang west',
            'dangcol',
            'ibayo',
            'malabia',
            'poblacion Barcenas',
            'pto. rivas ibaba',
            'pto. rivas itaas',
            'san jose',
            'sibacan',
            'camacho',
            'talisay',
            'tanato',
            'tenejero',
            'tortugas',
            'tuyo',
            'bagong silang',
            'cupang north',
            'doña francisca',
          ],
        }
      : req.query.loc;
  try {
    const activeShop = await Owners.find({
      isApproved: true,
      gadgetList,
      'shopAddress.shopBarangay': shopBarangay,
    });
    activeShop.length === 0 ? res.status(200).json({ error: true }) : res.status(201).json(activeShop);
  } catch (err) {
    next(err);
  }
};
