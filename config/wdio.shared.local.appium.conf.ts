import { config } from './wdio.shared.conf';

//
// ======
// Appium
// ======
//
// config.services = (config.services ? config.services : []).concat([
//     [
//         'appium',
//         {
//             // This will use the globally installed version of Appium
//             command: 'appium',
//             args: {
//                 // This is needed to tell Appium that we can execute local ADB commands
//                 // and to automatically download the latest version of ChromeDriver
//                 relaxedSecurity: true,
//             },
//         },

//     ],
// ]);
//
// =====================
// Server Configurations
// =====================
//
config.port = 4723;

// ===============================================================
//  Configuration for running appium sever on app - #suhail
// ===============================================================
//

config.services = ['appium'];
config.bail = 0;
config.path = '/wd/hub/';

// ===============================================================
//  Configuration for gui inspect - #suhail
// ===============================================================
//
// {
//     "platformName": "Android",
//     "maxInstances": 1,
//     "deviceName": "RZ8N921GHQT",
//     "platformVersion": "11",
//     "orientation": "PORTRAIT",
//     "automationName": "UiAutomator2",
//     "app": "C:\\Users\\Lilac-PC-15\\Desktop\\Projects\\appium-boilerplate\\apps\\Android-NativeDemoApp-0.4.0.apk",
//     "appWaitActivity": "com.wdiodemoapp.MainActivity",
//     "noReset": true,
//     "newCommandTimeout": 240
//   }


export default config;
