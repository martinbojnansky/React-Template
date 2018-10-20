import { StoreState } from 'services/Store';
import { connect, Dispatch } from 'react-redux';
import { Layout, LayoutProps, LayoutDispatch } from 'components/Layout/Layout';

export function mapStateToProps(state: StoreState): LayoutProps {
  return {
  };
}

export function mapDispatchToProps(dispatch: Dispatch<StoreState>): LayoutDispatch {
  return {
  };
}

export default connect(undefined, mapDispatchToProps)(Layout);