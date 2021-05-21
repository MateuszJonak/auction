import React, {useState} from 'react';
import {Button, Input, Text} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {StyleSheet, View, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootDrawerParamList} from '../types/navigation';
import {state} from '../state';
import {netToGross, pricePerMeter, percentOfMax} from '../utils';

const minIncrement = Math.round(state.originalPrice / 1000) * 10;

const Auction: React.FC<BottomTabScreenProps<RootDrawerParamList, 'Auction'>> =
  () => {
    const [tempPrice, setTempPrice] = useState<number>(state.originalPrice);
    const [price, setPrice] = useState<number>(state.originalPrice);

    return (
      <ScrollView
        contentContainerStyle={styles.body}
        scrollEnabled={false}
        keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.safeArea}>
          <Text>Initial price: {state.originalPrice}</Text>
          <Text>1%: {minIncrement}</Text>
          <Button
            title="Clean"
            onPress={() => {
              setTempPrice(state.originalPrice);
              setPrice(state.originalPrice);
            }}
          />

          <View style={styles.actions}>
            <View style={styles.inputContainer}>
              <Input
                containerStyle={styles.input}
                keyboardType="number-pad"
                label="New price"
                value={`${tempPrice}`}
                onChangeText={text => setTempPrice(parseInt(text, 10))}
                leftIcon={<MaterialIcons name="monetization-on" size={20} />}
              />

              <Button
                disabled={tempPrice > state.maxPrice}
                title="+ 1%"
                containerStyle={styles.buttonApply}
                onPress={() => setTempPrice(p => p + minIncrement)}
              />
            </View>
            {state.netto && <Text h4>gross: {netToGross(tempPrice)}</Text>}
            <Text h4>
              per m2:{' '}
              {pricePerMeter(
                state.netto ? netToGross(tempPrice) : tempPrice,
                state.meters,
              )}
            </Text>
            <Text h4>
              % of max:{' '}
              {percentOfMax(tempPrice, state.maxPrice, state.originalPrice)}
            </Text>
            <Button title="Submit" onPress={() => setPrice(tempPrice)} />
          </View>
          <View style={styles.footerResult}>
            <View>
              <Text h4>Price: {price}</Text>
              {state.netto && <Text h4>Gross price: {netToGross(price)}</Text>}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    display: 'flex',
  },
  body: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
  },
  buttonApply: {
    justifyContent: 'center',
  },
  actions: {
    flex: 1,
    justifyContent: 'center',
  },
  footerResult: {
    width: '100%',
    alignItems: 'center',
  },
});

export default Auction;
