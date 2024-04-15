const apiKey = process.env.EXPO_PUBLIC_API_KEY;

export const getMapPreview = (lat, lng) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=350x200&maptype=roadmap&markers=color:red%7C${lat},${lng}&key=${apiKey}`;
  return imagePreviewUrl;
};

export const getAddress = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }
  const data = await response.json();
  const address = data.results[0].formatted_address;

  return address;
};
