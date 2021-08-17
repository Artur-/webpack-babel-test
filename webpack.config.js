const BabelMultiTargetPlugin = require('webpack-babel-multi-target-plugin').BabelMultiTargetPlugin;

module.exports = {

    resolve: {
        mainFields: [
            'es2015',
            'module',
            'main',
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    BabelMultiTargetPlugin.loader(),
                ],
            },
        ],
    },

    plugins: [
        new BabelMultiTargetPlugin(),
    ],

};
