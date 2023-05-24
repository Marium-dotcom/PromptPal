import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({

    email:{
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required']
    },

    username:{
type: String,
required: [true, 'username is required'],
match: [ /^[a-zA-Z0-9_-]{3,16}$/, 'usernames that are between 3 and 16 characters long and can contain letters both uppercase and lowercase, numbers, underscores, and hyphens']
    },
image: {
    type: String

    }
})


const User = models.User || model("User", UserSchema)

export default User