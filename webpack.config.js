module.exports = {
    // NOT SURE ABOUT THIS YET
    //
    // entry: './server.js',
    // output: {
    //     path: './dist',
    //     filename: 'bundle.js'
    // },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ]
    }
};
