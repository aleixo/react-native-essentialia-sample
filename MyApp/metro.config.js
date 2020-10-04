/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

const extraNodeModules = {
  'react-native-essentialia': path.resolve(
    __dirname + '/../react-native-essentialia',
  ),
};

const watchFolders = [
  //Relative path to packages directory
  path.resolve(__dirname + '/../react-native-essentialia'),
];

module.exports = {
  watchFolders,
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from common/ to local node_modules
        name in target
          ? target[name]
          : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
};
