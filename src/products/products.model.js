const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name:        { type: String, required: true },
    category:    { type: String, required: true },
    subcategory: { type: String, default: "" }, // ✅ إضافة النوع
    description: { type: String, required: true },
    price:       { type: Number, required: true },
    image:       { type: [String], required: true },
    oldPrice:    { type: Number },
    rating:      { type: Number, default: 0 },
    author:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    inStock:     { type: Boolean, default: true },
    stock:       { type: Number, default: 0 }, // لو كنت تستعمله
  },
  { timestamps: true }
);

const Products = mongoose.model("Product", ProductSchema);
module.exports = Products;
