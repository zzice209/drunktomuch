import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});
// const store = (window.devToolsExtension
//   ? window.devToolsExtension()(createStore)
//   : createStore)(reducer);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
