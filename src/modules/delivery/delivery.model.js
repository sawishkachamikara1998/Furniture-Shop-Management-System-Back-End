import mongoose, { Schema } from "mongoose";
import slug from "slug";
import uniqueValidator from "mongoose-unique-validator";

const DeliverySchema = new Schema(
  {
    code: {
      type: String,
      trim: true,
      required: [true, "code is required!"],
      minlength: [3, "Title need to be longer!"],
      unique: true,
    },
    customerName: {
      type: String,
      trim: true,
      required: [true, "customerName is required!"],
      //minlength: [10, "Text need to be longer!"],
    },
  },
  { timestamps: true }
);

DeliverySchema.plugin(uniqueValidator, {
  message: "{VALUE} already taken!",
});

DeliverySchema.pre("validate", function (next) {
  next();
});

DeliverySchema.methods = {
  toJSON() {
    return {
      _id: this._id,
      status: true,
      e: {
          errors: null
      },
      customerName: this.customerName,
      code: this.code,
    };
  },
};

export default mongoose.model("Delivery", DeliverySchema);
