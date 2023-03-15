import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import toys from './toys';


export const store = configureStore({
  reducer: {
    toys
  },
  middleware: (getDefaults) =>
    process.env.NODE_ENV === 'development' ? [...getDefaults({ serializableCheck: false }), logger] : getDefaults(),
});
export default store;