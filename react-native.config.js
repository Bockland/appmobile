module.exports = {
    project: {
        ios: {},
        android: {},
    },
    assets: ['./src/assets/fonts/'],
    dependencies: {
        'react-native-nfc-manager': {
            platforms: {
                ios: null,
            },
        },
        // 'react-native-ssl-pinning': {
        //     platforms: {
        //         ios: null,
        //     },
        // },
        // 'react-native-ssl-public-key-pinning': {
        //     platforms: {
        //         android: null,
        //     },
        // },
    },
};
