const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    image: {
        // Dealing with image file uploaded by the user
        url: String,
        filename: String,
        required: true,
    },
    resume: {
        // Dealing with pdf file uploaded by the user
        url: String,
        filename: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;