import React from 'react';
import {Text} from 'react-native-elements';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootDrawerParamList} from '../types/navigation';
import {StyleSheet} from 'react-native';

const Settings: React.FC<
  BottomTabScreenProps<RootDrawerParamList, 'Settings'>
> = () => {
  return (
    <SafeAreaView style={styles.view}>
      <Text>Settings</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 16,
  },
});

export default Settings;
