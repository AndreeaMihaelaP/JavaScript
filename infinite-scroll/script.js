// Unsplash API
const count = 10;
const apiKey = 'm5CzrGYYZN2CXTqJELE3-kADeZ_zo-ri4vxbFzFcmHs';
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
    } catch(error) {
    // catch error here
    console.log(error);
    }
}

// On Load
getPhotos();