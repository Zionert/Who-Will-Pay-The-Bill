import { registerRootComponent } from 'expo';
import { forwardRef } from 'react';
import React from 'react';
import App from './App';

import Toast from 'react-native-toast-message';
import { MyProvider } from './src/context';

const ToastWrapper = forwardRef((props, ref) => {
  return <Toast {...props} ref={ref} />;
});

registerRootComponent(() => (
  <MyProvider> 
    <App />
    <ToastWrapper InnerRef={(ref) => Toast.setRef(ref)} />
  </MyProvider>
));
