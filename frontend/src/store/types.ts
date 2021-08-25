import { store } from '.';

export type RootDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
