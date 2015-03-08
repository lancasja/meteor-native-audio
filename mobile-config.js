App.info({
  id: 'com.jamlancaster.nativeAudio',
  name: 'nativeAudio',
  description: 'Calling native media player with cordova plugins.',
  author: '@jamlancaster'
});

// Set up resources such as icons and launch screens.
// App.icons({
//   'iphone_2x': '/public/icons/icon-120.png',
//   'iphone_3x': '/public/icons/icon-180.png',
// });

// App.launchScreens({
//   'iphone5': '/public/splash/splash-iphone_5.png',
//   'iphone6': '/public/splash/splash-iphone_6.png',
//   'iphone6p_portrait': '/public/splash/splash-iphone_6p.png',
// });

// Set PhoneGap/Cordova preferences
App.setPreference('Fullscreen', true);
App.setPreference('Orientation', 'portrait');
App.setPreference('BackgroundColor', '0x4DB295');
App.setPreference('HideKeyboardFormAccessoryBar', false);