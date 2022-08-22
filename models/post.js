const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
title: String,
price: String,
description: String,
images: [ String ],
location: String,
lat: Number,
lng: Number,
author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
},
reviews: [
    {
        type: Schema.Types.ObjectId,
        ref:'Review'
    }
]
});


module.exports = mongoose.model('Post',PostSchema);

/* User - 
email - string
username - string
password - string
image - string
posts - array of objects ref posts
 */
/* Post
title - string
price
description - string
images - array of string
location - string
lat - number
long - number
author - object id ref user
reviews - array of object */
