/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
const path = require('path');

const extraNodeModules = {
  'react-native-iso-ui': path.resolve(__dirname + '/../react-native-iso-ui'),
};

const watchFolders = [
  //Relative path to packages directory
  path.resolve(__dirname + '/../react-native-iso-ui'),
];

module.exports = {
  watchFolders,  
  resolver: {
	    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from common/ to local node_modules
        name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
};
