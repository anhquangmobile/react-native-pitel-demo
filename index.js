/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.jsx';
import {name as appName} from './app.json';
import {NotificationBackground} from 'react-native-pitel-voip';

const options = {
  ios: {
    appName: `${APP_NAME}`,
  },
  android: {
    alertTitle: 'Permissions required',
    alertDescription: 'This application needs to access your phone accounts',
    cancelButton: 'Cancel',
    okButton: 'ok',
    foregroundService: {
      channelId: `${PACKAGE_ID}`,
      channelName: 'Foreground service for my app',
      notificationTitle: 'My app is running on background',
      notificationIcon: 'Path to the resource icon of the notification',
    },
    additionalPermissions: [],
  },
};

NotificationBackground(options);

AppRegistry.registerComponent(appName, () => App);
