import store from ".";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
