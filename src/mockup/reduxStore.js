import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

let reducers = combineReducers({
  profileReducer,
  messagesReducer,
  sidebarReducer,
});

let store = createStore(reducers);

export default store;
