import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'

export default function Setting() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
      <View>
        <Text>Setting</Text>
      </View>
      <View>
        <View style={styles.rowSwitch}>
          <View>
            <Text>theme Mode</Text>
          </View>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  rowSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  }
})
