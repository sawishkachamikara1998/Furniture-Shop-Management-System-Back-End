import mongoose, { Schema } from "mongoose";
import slug from "slug";
import uniqueValidator from "mongoose-unique-validator";
import { NormalModule } from "webpack";

const Branchschema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Name is required!"],
      minlength: [3, "Title need to be longer!"],
      unique: true,
    },
    location: {
      type: String,
      trim: true,
      required: [true, "Text is required!"],
      minlength: [10, "Text need to be longer!"],
    },
    contact: {
      type: String,
      trim: true,
      default: null
    },
    description: {
      type: String,
      trim: true,
      default: null
    },
  },
  { timestamps: true }
);

Branchschema.plugin(uniqueValidator, {
  message: "{VALUE} already taken!",
});

Branchschema.pre("validate", function (next) {
  next();
});

Branchschema.methods = {
  toJSON() {
    return {
        status: true,
        e: {
          errors: null,
        },
        name: this.name,
        location: this.location,
        contact: this.contact,
        description: this.description,
    };
  },
};

export default mongoose.model("Branch", Branchschema);
