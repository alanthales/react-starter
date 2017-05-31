var webpack = require('webpack');

module.exports = {
    entry: './app/App.js',
    output: {
        path: '/public', 
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3333
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ["es2015", { modules: false }],
                        "react"
                    ],
                    plugins: [
                        "transform-node-env-inline"
                    ],
                    // env: {
                    //     development: {
                    //         plugins: ["react-hot-loader/babel"]
                    //     }
                    // }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:8]"
                        }
                    },
                    // "postcss-loader" // has separate config, see postcss.config.js nearby
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ]
}