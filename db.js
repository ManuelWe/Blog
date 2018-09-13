const mongoose = require('mongoose');

// Establish connection to MongoDB Atlas
const db = mongoose.connect('mongodb://DBforBlog:saCIYJedcumCeNzP@cluster0-shard-00-00-j76b6.mongodb.net:27017,cluster0-shard-00-01-j76b6.mongodb.net:27017,cluster0-shard-00-02-j76b6.mongodb.net:27017/blog?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
    {useNewUrlParser: true});


exports.db = db;
