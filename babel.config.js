module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native-community-image-editor2': './lib/ImageEditor',
        },
        cwd: 'babelrc',
      },
    ],
  ],
};
