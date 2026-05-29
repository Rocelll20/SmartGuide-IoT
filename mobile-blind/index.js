// NOTE: This file starts the Expo mobile app, so avoid changing the root component registration unless needed.
// NOTE: This file starts the Expo mobile app, so avoid changing the root component registration unless needed.

import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);