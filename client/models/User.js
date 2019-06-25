var mongoose=require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password:{
        type: String
    },
    characters: [
        {
            //store objectIds in the array
            type: Schema.Types.ObjectId,
            ref: "Character"
        }
    ]
});

const User = mongoose.model("User", UserSchema)
module.exports = User;