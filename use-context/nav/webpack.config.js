const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

const deps = require("./package.json").dependencies;

const getEnvValue = (_env) => {
  if (_env.github) {
    return `Github`
  }
  else {
    return `Local`
  }
}

const getUrl = (_env, _module, _port) => {
  if (_env.github) {
    return `https://oseasjs.github.io/module-federation-react-state/use-context/${_module}/`
  }
  else {
    return `http://localhost:${_port}/`
  }
}

module.exports = (_, argv) => ({
  output: {
    publicPath: getUrl(argv.env, 'nav', 3001)
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3001,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "nav",
      filename: "remoteEntry.js",
      remotes: {
        store: `store@[storeUrl${getEnvValue(argv.env)}]remoteEntry.js`,
      },
      exposes: {
        "./Header": "./src/Header",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});