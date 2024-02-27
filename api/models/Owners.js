import mongoose from 'mongoose';

const OwnerSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      requred: true,
      unique: true,
    },
    shopName: {
      type: String,
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    shopAddress: {
      shopStreet: {
        type: String,
        required: true,
      },
      shopBarangay: {
        type: String,
        required: true,
      },
    },
    shopType: {
      type: Array,
      required: true,
      default: [],
    },
    gadgetList: {
      type: Array,
      required: true,
      default: [],
    },
    permitNo: {
      type: String,
      required: true,
    },
    permitPhoto: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Owners = new mongoose.model('Owners', OwnerSchema);
export default Owners;
