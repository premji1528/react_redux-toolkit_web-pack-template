import { combineReducers } from 'redux'
import { URLS, STORAGE_KEY } from '@Utils/constants'

/* Reducers */
import defaultReducer from './defaultReducer'

/* Actions */
export * from './defaultReducer'

const allReducers = combineReducers({
  defaultReducer
})

const rootReducer = (state: any, action: any) => {
  if (action.type === URLS.LOG_OUT) {
    localStorage.removeItem('persist:' + STORAGE_KEY.PERSIST_ROOT)
    sessionStorage.clear()
    localStorage.clear();
    state.dashboardReducer = { ...state.dashboardReducer, agreedTermsAndService: false }
  }

  return allReducers(state, action)
}
export type rootReducer = ReturnType<typeof rootReducer>
export default rootReducer
