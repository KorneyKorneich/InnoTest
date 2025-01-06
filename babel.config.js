module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@": "./src",
          '@screens/*': './src/screens/*',
          '@store/*': './src/store/*',
          '@navigation/*': './src/navigation/*',
          '@entity/*': './src/entity/*',
        },
      },
    ],
  ],

};
