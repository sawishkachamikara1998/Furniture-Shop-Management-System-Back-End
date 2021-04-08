import mongoose, { Schema } from "mongoose";
import slug from "slug";
import uniqueValidator from "mongoose-unique-validator";

const Stockschema = new Schema(
  {
    prodName: {
        type: String,
        trim: true,
        required: [true, "Name is required!"],
        minlength: [3, "Title need to be longer!"],
        unique: true,
      },
      prodCode: {
        type: String,
        trim: true,
        required: [true, "Code is required!"],
        minlength: [3, "Code need to be longer!"],
        unique: true,
      },
      vendorName: {
        type: String,
        trim: true,
        required: [true, "Name is required!"],
      },
      vendorPrice: {
        type: String,
        trim: true,
      },
      category: {
        type: String,
        trim: true,
      },
      brandName: {
        type: String,
        trim: true,
      },

      quantity: {
        type: String,
        trim: true,
        required: [true, "Name is required!"],
      },

      date: {
        type: String,
        trim: true,
        
      },
  },
  { timestamps: true }
);

Stockschema.plugin(uniqueValidator, {
  message: "{VALUE} already taken!",
});

Stockschema.pre("validate", function (next) {
  next();
});

Stockschema.methods = {
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

export default mongoose.model("Stock", Stockschema);

