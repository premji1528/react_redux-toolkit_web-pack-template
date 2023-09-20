import { IMenuItem } from '@Interface/index'
import { URLS } from '@Utils/constants'
import { DefaultPage, PageNotFound } from '@Pages/index'

export default [
  {
    path: URLS.PAGE_NOT_FOUND,
    routeName: 'Page Not Found',
    component: PageNotFound,
    icon: '',
    permissions: [],
    children: [],
  },
  {
    path: URLS.DEFAULT,
    routeName: 'Default Component',
    component: DefaultPage,
    icon: '',
    permissions: [],
    children: [],
  }
] as IMenuItem[]
