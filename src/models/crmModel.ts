import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema: any = {
    _id: { type: Schema.ObjectId, auto: true },
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    }
}

export const ContactSchema = new mongoose.Schema(schema);
