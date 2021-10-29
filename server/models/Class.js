const mongoose, { Schema, SchemaTypes } = require('mongoose');

const ClassSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    previewVideoUrl: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    category: {
        type: SchemaTypes.ObjectId,
        ref: 'Category'
    },
    timesPurchased: {
        type: Number,
        required: true
    },
    reviews: {
        type: SchemaTypes.ObjectId,
        ref: 'Review'
    }
});

ClassSchema.methods.purchase = function purchase() {
    this.timesPurchased++;
    this.save();
}

const Class = mongoose.model(ClassSchema, 'Class');
module.exports = Class;