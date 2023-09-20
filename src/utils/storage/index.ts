import { STORAGE_KEY } from '@Utils/constants'

export const getToken = (updateToken?: string): null | string => {
  if (updateToken) {
    localStorage.setItem(STORAGE_KEY.AUTH_TOKEN, updateToken)
    return updateToken
  }

  return localStorage.getItem(STORAGE_KEY.AUTH_TOKEN)
}

export const IS_USER_AUTHENTICATED = (updateAuthenticated?: string) => ((updateAuthenticated)
  ? localStorage.setItem(STORAGE_KEY.IS_USER_AUTHENTICATED, String(updateAuthenticated))
  : localStorage.getItem(STORAGE_KEY.IS_USER_AUTHENTICATED))

