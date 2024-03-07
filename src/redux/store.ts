import { configureStore } from "@reduxjs/toolkit";

import { offersApi } from "./offersApi";

export default configureStore({
  reducer: {
    [offersApi.reducerPath]: offersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(offersApi.middleware),
});

// import { configureStore } from "@reduxjs/toolkit";

// import { reducer } from "./reducer";

// export const store = configureStore({
//   reducer,
// });
