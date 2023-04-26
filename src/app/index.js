import React, {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from '../store';
import Main from '../routes';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};
export default App;
