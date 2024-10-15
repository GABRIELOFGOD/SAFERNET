import { baseUrl } from "./Context";

export const uploadImage = async (imageFile) => {
  try {
    // Step 1: Request the signature from your server
    const signatureResponse = await fetch(`${baseUrl}/generate-signature`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uploadPreset: 'blog_images',
      }),
    });
    const { signature, timestamp, apiKey, cloudName, uploadPreset } = await signatureResponse.json();

    // Step 2: Upload image to Cloudinary
    const formData = new FormData();
    formData.append('file', imageFile);  // Your image file here
    formData.append('upload_preset', uploadPreset);
    formData.append('timestamp', timestamp);
    formData.append('api_key', apiKey);
    formData.append('signature', signature);

    const cloudinaryResponse = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    const cloudinaryData = await cloudinaryResponse.json();
    if (cloudinaryResponse.ok) {
      console.log('Upload successful:', cloudinaryData);
      return cloudinaryData.secure_url;
    } else {
      console.log('Cloudinary error:', cloudinaryData);
    }
  } catch (err) {
    console.error('Error during upload:', err);
  }
};
