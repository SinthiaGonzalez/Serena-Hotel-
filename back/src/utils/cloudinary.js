const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: cloud,
    api_key: process,
    api_secret: secret
});

module.exports = cloudinary;

