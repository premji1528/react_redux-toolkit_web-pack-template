export const API_URL = window.location.origin + '/api/'; // If need to point specifc orign, update the origin here

export const STORAGE_KEY = {
  AUTH_TOKEN: 'accessToken',
  IS_USER_AUTHENTICATED: 'is-user-auth',
  PERSIST_ROOT: 'react-typescript-webpack-root',
}

export const enum URLS {
  DEFAULT = '/',
  LOG_OUT = '/',
  PAGE_NOT_FOUND = '*',
}
