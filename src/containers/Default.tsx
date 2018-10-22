import { StoreState } from 'services/Store';
import { connect, Dispatch } from 'react-redux';
import { Default, DefaultProps, DefaultDispatch } from 'components/Default';

import * as defaultActions from 'actions/Default';

export function mapStateToProps(state: StoreState): DefaultProps {
  return {
    text: state.joke
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): DefaultDispatch {
  return {
    loadText: () => dispatch(defaultActions.loadJoke())
  };
}

export default connect(undefined, mapDispatchToProps)(Default);