export const getMapPreview = (lat, lng) => {
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=350x200&maptype=roadmap&markers=color:red%7C${lat},${lng}&key=${apiKey}`;
  return imagePreviewUrl;
};
