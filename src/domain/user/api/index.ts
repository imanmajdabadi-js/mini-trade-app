const baseUrl = 'http://localhost:8080';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UrlMap = Record<string, (...value: any[]) => string>;

export const Urls: UrlMap = {
  user: (userId: string) => {
    return `${baseUrl}/api/User/${userId}/accounts`;
  },
};
