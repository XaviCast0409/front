export const isTokenExpired = (token: string | null, marginInSeconds: number = 0): boolean => {
  if (!token) return true; // No hay token, considerar como expirado
  const arrayToken = token.split('.');
  const tokenPayload = JSON.parse(atob(arrayToken[1]));
  
  const currentTimestamp = Math.floor(new Date().getTime() / 1000);
  const expirationTimestamp = tokenPayload?.exp || 0;
  const expirationWithMargin = expirationTimestamp - marginInSeconds;
  console.log({
    tokenPayload
  });
  
  return currentTimestamp >= expirationWithMargin;
};
interface tokenPros {
  isAdmin: boolean;
}

export const isTokenObj = (token: string | null): tokenPros => {
  if (token) {
    const arrayToken = token.split('.');
    const tokenPayload: tokenPros = JSON.parse(atob(arrayToken[1]));
    return tokenPayload;
  } else {
    return {
      isAdmin: false
    }
  }
}