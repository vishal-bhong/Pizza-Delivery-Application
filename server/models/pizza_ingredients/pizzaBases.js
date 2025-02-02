import mongoose from 'mongoose';

const baseSchema = mongoose.Schema({
    name: { type: String, required: true },  
    message : { type: String, required: true },
    availableCount : { type: Number, required: true },
    selectedFile : { type: String, required: true },
    cost : { type: Number, required: true },
})

var PizzaBases = mongoose.model('PizzaBases', baseSchema);

export default PizzaBases;