import { configureStore } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SortState = { key: string | null; dir: 'asc' | 'desc' | null }
const uiSlice = createSlice({
  name: 'ui',
  initialState: { sort: { key: null, dir: null } as SortState },
  reducers: {
    setSort(state, action: PayloadAction<SortState>) { state.sort = action.payload }
  }
})
export const { setSort } = uiSlice.actions

export const store = configureStore({ reducer: { ui: uiSlice.reducer } })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
