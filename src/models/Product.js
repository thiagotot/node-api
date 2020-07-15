const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: mongoose.Schema.Types.Date,
        default: Date.now
    }
});

ProductSchema.plugin(mongoosePaginate);
var Product = mongoose.model('Product', ProductSchema);


module.exports = {
    Product: Product
}

