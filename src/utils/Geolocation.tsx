// Modificado getCurrentLocation
export const getCurrentLocation = async (): Promise<{ latitude: number, longitude: number }> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error: GeolocationPositionError) => {
          reject(error);
          // Mostrar mensaje de error al usuario
        }
      );
    } else {
      reject(new Error("Geolocalización no compatible"));
      // Mostrar mensaje de error al usuario
    }
  });
};
