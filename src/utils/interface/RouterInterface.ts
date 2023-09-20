export interface IMenuItem {
  path: string
  routeName: string
  component: any
  icon?: string
  permissions: string[] // If you want to implement any permission needs to be started from here
  children: [] // Child routes declarations
}
