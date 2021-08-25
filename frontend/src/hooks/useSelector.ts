import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { RootState } from '../store/types'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector