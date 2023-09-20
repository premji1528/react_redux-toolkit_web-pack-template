import React from 'react'
import { NavigateOptions, To, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThemeColorWrapper } from './themeWrapper'

import { IS_USER_AUTHENTICATED } from '@Utils/storage'

/* istanbul ignore next */
export function withRouter(Child: any) {
  return props => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
      <ThemeColorWrapper
        component={childProp => (
          <Child
            {...props}
            {...childProp}
            navigate={(url: To, options?: NavigateOptions) =>
              navigate(url, options)
            }
            location={location}
            dispatch={dispatch}
            isuserauthenticated={IS_USER_AUTHENTICATED()}
          />
        )}
      />
    )
  }
}
