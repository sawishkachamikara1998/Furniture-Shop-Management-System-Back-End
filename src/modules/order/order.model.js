import mongoose, { Schema } from "mongoose";
import slug from "slug";
import uniqueValidator from "mongoose-unique-validator";

const OrderSchema = new Schema(
    {
        cardOnName: {
            type: String,
            trim: true,
            required: [true, "Name is required!"],
            unique: true,
        },
        cardNumber: {
            type: String,
            trim: true,
            required: [true, "Number is required!"],

        },
        expM: {
            type: String,
            trim: true,
            required: [true, "Expiry Month is required!"],
            maxlength: [2, "Text need to be MM(12)!"],
        },
        expY: {
            type: String,
            trim: true,
            //required: [true, "Expiry Month is required!"],
            maxlength: [4, "Text need to be YYYY(1991)!"],
            // default: "0044"
        },
        security: {
            type: String,
            trim: true,
            //required: [true, "Security Code is required!"],
            maxlength: [3, "Incorrect CVV!"],
            default: "223"
        },
    },
    { timestamps: true }
);

OrderSchema.plugin(uniqueValidator, {
    message: "{VALUE} already taken!",
});

OrderSchema.pre("validate", function (next) {
    next();
});

OrderSchema.methods = {
    getValue() {
        return {
            status: true,
            e: {
                errors: null
            },
            cardOnName: this.cardOnName,
            cardNumber: this.cardNumber,
            expM: this.expM,
            expY: this.expY,
            security: this.security

        }
    },
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

export default mongoose.model("Order", OrderSchema);
