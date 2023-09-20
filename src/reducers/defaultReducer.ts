import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import client from '@Utils/axiosConfig'

import { reviseData } from '@Utils/validation'
import { API, IDefaultReducerState, IDispatchState } from '@Interface/index'

export const fetchUsers: any = createAsyncThunk(
  'defaultReducer/fetchUsers',
  async () => {
    return new Promise((resolve: any) => {
      client
        .get(API.default.get)
        .then(reviseData)
        .then((response: any) => {
          const { data, error } = response
          if (!error) {
            resolve({
              data: data || [],
            })
          }
        })
        .catch((response: Error) => {
          const { data } = reviseData(response)
          console.log('API Failed!', data)
          resolve({ data: [] })
        })
    })
  }
)

export const defaultReducerInitialState: IDefaultReducerState = {
  list: [],
  loading: false,
}

const defaultReducer = createSlice({
  name: 'defaultReducer',
  initialState: defaultReducerInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, (state: IDefaultReducerState) => {
      state.loading = true
    })
    builder.addCase(
      fetchUsers.fulfilled,
      (state: IDefaultReducerState, action: IDispatchState) => {
        state.list = action.payload.data
        state.loading = false
      }
    )
  },
})

export default defaultReducer.reducer
