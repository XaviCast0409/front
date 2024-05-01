import { Cloudinary } from "@cloudinary/base";

// Configura Cloudinary
const cloudinary = new Cloudinary({
    cloud: {
        cloudName: 'dj8g1egez',
    },
});

export default cloudinary;
