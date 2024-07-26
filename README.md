# rn-pitel-demo

React Native - Pitel VoIP demo

# Initialize

> **Note**
> rn-pitel-demo using react native 0.74.1

- **Setup to wake up app**: please follow guide in [here](https://github.com/tel4vn/flutter-pitel-voip/blob/main/PUSH_NOTIF.md) to setting push notification (FCM for android), Pushkit (for IOS).

```yaml
yarn install
```

- Installing your Firebase configuration file:

* Android: add file `google-services.json` to `android/app/google-services.json`
* IOS: open Xcode & add file `GoogleService-Info.plist` to `ios/GoogleService-Info.plist` (guide in [here](https://github.com/anhquangmobile/react-native-pitel-voip/blob/main/%20PUSH_NOTIF.md))

# Usage

- In file `src/screens/home_screen/index.js` please enter the information.

```js
const ext = `${EXTENSION}`;
const sipPass = `${EXTENSION_SIP_PASSWORD}`;
const appId = `${BUNDLE_ID}`;
const domainUrl = `${DOMAIN}`;
...
const sdkOptionsInit = {
    sipDomain: `${DOMAIN}`,
    port: `${PORT}`,
    extension: ext,
    wssServer: `${WSS_URL}`,
    sipPassword: sipPass,
    bundleId: appId, // Bundle id for IOS
    packageId: appId, // Package id for Android
    teamId: `${TEAM_ID}`,
  };
```

- In file `src/screens/home_screen/home_screen.js` please enter the information.

```js
const ext = `${EXTENSION}`;
const phone = `${CALL_OUT_PHONE_NUMBER}`;
const iosAppName = `${IOS_APP_NAME}`;
```

- In file `index.js` please enter the information.

```js
const options = {
  ios: {
    appName: `${APP_NAME}`,
  },
  android: {
    ...
    foregroundService: {
      channelId: `${PACKAGE_ID}`,
      ...
    },
  },
};
```

# Run source code

```js
// Android
yarn android

// IOS
yarn ios
yarn ios --device="device_name" // specific device
```
