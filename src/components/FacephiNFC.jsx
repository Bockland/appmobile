import React from 'react'
import { useFacephi } from '../hooks/useFacephi'
import { TouchableOpacity, View } from 'react-native';

export const FacephiNFC = () => {

    const { launchInitSession, launchCloseSession, startInitOperation, startNfc  } = useFacephi();



  return (
    <View>
        <TouchableOpacity style={styles.biometric} onPress={() => startInitOperation()}>
            <CSText text={'Init Operation'} type="medium" size={16} />
        </TouchableOpacity>
    </View>
  )
}
