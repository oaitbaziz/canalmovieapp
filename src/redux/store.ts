import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import homeReducer from "./home/homeReducer";

const rootReducer = combineReducers({ home: homeReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
