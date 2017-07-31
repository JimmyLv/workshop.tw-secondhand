import * as Redux from 'redux';
import * as D from '../../definitions';

const initialState: D.AppState = {
  loading: false,
  logined: false,
};

const appReducer: Redux.Reducer<D.AppState> = (state: D.AppState, action: Redux.Action): D.AppState => {
  state = state || initialState;
  return state;
};

export default appReducer;
