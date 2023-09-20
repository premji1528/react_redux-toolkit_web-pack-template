export interface IReducerState {
  coreReducer: IDefaultReducerState
}

export interface IDispatchState {
  payload: any
}

export interface APICommonResponseMock {
  payload: any
}

export interface IDefaultReducerState {
  list: { name: string; id: number }[]
  loading: boolean
}
