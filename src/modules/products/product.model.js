import mongoose, { Schema } from "mongoose";
import slug from "slug";
import uniqueValidator from "mongoose-unique-validator";

const ProductSchema = new Schema(
  {
    code: {
      type: String,
      trim: true,
      required: [true, "Name is required!"],
      minlength: [3, "Title need to be longer!"],
      unique: true,
    },
    name: {
      type: String,
      trim: true,
      required: [true, "Text is required!"],
      minlength: [10, "Text need to be longer!"],
    },
  },
  { timestamps: true }
);

ProductSchema.plugin(uniqueValidator, {
  message: "{VALUE} already taken!",
});

ProductSchema.pre("validate", function (next) {
  next();
});

ProductSchema.methods = {
  toJSON() {
    return {
      _id: this._id,
      status: true,
      e: {
          errors: null
      },
      name: this.name,
      code: this.code,
    };
  },
};

export default mongoose.model("Product", ProductSchema);
