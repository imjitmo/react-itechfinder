import mongoose from 'mongoose';

const DataSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    userGender: {
      type: Boolean,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    userAddress: {
      street: {
        type: String,
      },
      barangay: {
        type: String,
      },
      city: {
        type: String,
      },
      province: {
        type: String,
      },
    },
  },
  { timestamps: true }
);
