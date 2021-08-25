import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterBy } from '../../types/filterBy'

const initialState: FilterBy = {
  name: ''
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterName: (state, action: PayloadAction<FilterBy>) => {
      state.name = action.payload.name
    }
  }
})

export const { setFilterName } = filterSlice.actions

export const filterReducer = filterSlice.reducer