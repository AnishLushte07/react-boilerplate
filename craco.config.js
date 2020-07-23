const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@text-color': '#000000',
              '@text-color-secondary': '#969696',
              '@font-size-base': '12px',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
