import mongoose, { Schema } from "mongoose";
import slug from "slug";
import uniqueValidator from "mongoose-unique-validator";

const FeedbackSchema = new Schema(
    {
        cFeedback: {
            type: String,
            trim: true,
            required: [true, "Title is required!"],
            minlength: [3, "Title need to be longer!"],
            unique: true,
        },

    },
    { timestamps: true }
);

FeedbackSchema.plugin(uniqueValidator, {
    message: "{VALUE} already taken!",
});

FeedbackSchema.pre("validate", function (next) {
    next();
});

FeedbackSchema.methods = {
    toJSON() {
        return {
            status: true,
            e: {
                error: null,
            },
        };
    },
};



export default mongoose.model("Feedback", FeedbackSchema);
