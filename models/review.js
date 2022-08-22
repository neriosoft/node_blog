const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
body: String,
author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
}

});


module.exports = mongoose.model('Review',PostSchema);

/* Review-
body - string
author - object id ref user */