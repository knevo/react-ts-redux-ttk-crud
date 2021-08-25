import { useDispatch as useReduxDispatch } from 'react-redux';
import { RootDispatch } from '../store/types';

export const useDispatch = () => useReduxDispatch<RootDispatch>()
