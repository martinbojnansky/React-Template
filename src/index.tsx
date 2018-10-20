import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { getStore } from 'services/Store';
import { history } from 'services/History';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { App } from 'components/App/App';
import registerServiceWorker from 'registerServiceWorker';

import 'resources/styles/Index.css';
import 'resources/styles/Bootstrap.css';

ReactDOM.render(
  <Provider store={getStore()}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
