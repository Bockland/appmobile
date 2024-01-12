import React from 'react'
import { NativeModules, Platform, NativeEventEmitter, LogBox } from 'react-native';

/*
import { NfcConfiguration, NfcResult } from '@facephi/sdk-nfc-react-native/src';

import {
    LICENSE_ANDROID_NEW,
    TRACKING_ERROR_LISTENER,
    LICENSE_IOS_NEW,
    licenseiOS,
    licenseAndroid,
} from '../constants';

import {
    SdkErrorType,
    SdkFinishStatus,
    SdkOperationType,
} from '@facephi/sdk-core-react-native/src/SdkCoreEnums';

import {
    CoreResult,
    InitOperationConfiguration,
    InitSessionConfiguration,
} from '@facephi/sdk-core-react-native/src'; */

export const useFacephi = () => {

    /*
    const { SdkMobileCore, SdkMobileNfc } = NativeModules;
    const [message, setMessage] = useState('');
    LogBox.ignoreLogs(['new NativeEventEmitter']);

    const subscription = sdkEmitter.addListener(TRACKING_ERROR_LISTENER, (reminder) =>
        console.log('TRACKING_ERROR_LISTENER', reminder)
    );

    const startNfc = async () => {
        try {
            console.log('Starting startNfc...');

            return await SdkMobileNfc.nfc(getNfcConfiguration())
                .then((result) => {
                    console.log('result', result);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    console.log('End startNfc...');
                });
        } catch (error) {
            setMessage(JSON.stringify(error));
        }
    };

    const getNfcConfiguration = () => {
        const config = {
            docNumber: '27288999',
            birthDay: '16/08/1999',
            expirationDay: '16/08/2999',
            extractionTimeout: 10,
        };
        return config;
    };

    const getInitOperationConfiguration = () => {
        const config = {
            customerId: '2121212',
            type: SdkOperationType.Onboarding,
        };
        return config;
    };

    const setLicenseBySO = () => {
        let license = {};
        if (Platform.OS === 'ios') {
            license = licenseiOS;
            license.license = {
                ...licenseiOS.license,
                comments: '',
                dateEnd: '2024-06-20',
                extraData: LICENSE_IOS_NEW,
            };
        } else {
            license = licenseAndroid;
            license.license = {
                ...licenseAndroid.license,
                comments: '',
                dateEnd: '2024-06-20',
                extraData: LICENSE_ANDROID_NEW,
            };
        }
        return JSON.stringify(license);
    };

    const launchInitSession = async () => {
        try {
            console.log('Starting initSession...');
            console.log(JSON.stringify(setLicenseBySO()));
            //alert(JSON.stringify(setLicenseBySO()));
            const config = {
                license: setLicenseBySO(),
                enableBehavior: false,
                enableTracking: true,
            };

            return await SdkMobileCore.initSession(config)
                .then((result) => {
                    console.log({ result });
                    alert(JSON.stringify(result));
                })
                .catch((error) => {
                    console.log({ error });
                    alert(JSON.stringify(error));
                })
                .finally(() => {
                    console.log('End initSession...');
                });
        } catch (error) {
            setMessage(JSON.stringify(error));
        }
    };

    const launchCloseSession = async () => {
        try {
            console.log('Starting closeSession...');
            return await SdkMobileCore.closeSession()
                .then((result) => {
                    console.log('result', result);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    subscription.remove();
                    console.log('End closeSession...');
                });
        } catch (error) {
            setMessage(JSON.stringify(error));
        }
    };

    const startInitOperation = async () => {
        try {
            console.log('Starting startInitOperation...');

            return await SdkMobileCore.initOperation(getInitOperationConfiguration())
                .then((result) => {
                    alert(JSON.stringify(result));
                })
                .catch((error) => {
                    alert(JSON.stringify(error));
                })
                .finally(() => {
                    console.log('End startInitOperation...');
                });
        } catch (error) {
            setMessage(JSON.stringify(error));
        }
    }; */

    const launchInitSession = () => {

    }

    const launchCloseSession = () => {
        
    }

    const startInitOperation = () => {
        
    }

    const startNfc = () => {
        
    }

    return { launchInitSession, launchCloseSession, startInitOperation, startNfc };
}
