import { combineReducers } from 'redux';
import { certificateReducer } from './certificateReducers';
import { educationReducer } from './educationReducer';

export const rootReducer = combineReducers({
    education: educationReducer,
    certificate: certificateReducer
})

export type RootState = ReturnType<typeof rootReducer>