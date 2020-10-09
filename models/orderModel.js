import mongoose from "mongoose";

const instance = mongoose.Schema(
  {
    email: String,
    phone: String,
    address: String,
    items: Array,
    price: Number,
    paymentInfo: Object,
    shipment: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("orders", instance);
