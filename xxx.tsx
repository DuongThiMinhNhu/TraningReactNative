import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

type CryptoInfoProps = {
  imageUrl: NodeRequire;
  title: string;
};

const CryptoInfo: React.FC<CryptoInfoProps> = ({ imageUrl, title }) => (
  <TouchableOpacity style={styles.cryptoContainer}>
    <Image resizeMode="cover" source={imageUrl} style={styles.cryptoImage} />
    <View style={styles.cryptoTextContainer}>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
);

const cryptoData = [
  { imageUrl: require('./assets/bitcoin.png'), title: 'Bitcoin' },
  { imageUrl: require('./assets/ethereum.png'), title: 'Ethereum' },
  { imageUrl: require('./assets/bnb.png'), title: 'BNB Beacon Chain' },
  { imageUrl: require('./assets/xrp.png'), title: 'XRP' },
  { imageUrl: require('./assets/cardano.png'), title: 'Cardano' },
  { imageUrl: require('./assets/polkadot.png'), title: 'Polkadot' },
  { imageUrl: require('./assets/dogecoin.png'), title: 'Dogecoin' },
  { imageUrl: require('./assets/solana.png'), title: 'Solana' }
];

export const MyComponent: React.FC = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.networkContainer}>
        <View style={styles.networkHeaderContainer}>
          <Image resizeMode="contain" source={require('./assets/network_icon.png')} style={styles.networkImage} />
          <View style={styles.networkTitleContainer}>
            <Text>Network</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchTextContainer}>
            <Text>Search</Text>
          </View>
          <Image resizeMode="contain" source={require('./assets/search_icon.png')} style={styles.searchImage} />
        </View>
        <View style={styles.allNetworksContainer}>
          <View style={styles.allNetworksTextContainer}>
            <Text>All Networks</Text>
          </View>
          <Image resizeMode="contain" source={require('./assets/dropdown_icon.png')} style={styles.allNetworksImage} />
        </View>
      </View>
      {cryptoData.map((crypto, index) => (
        <CryptoInfo key={index} imageUrl={crypto.imageUrl} title={crypto.title} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: { backgroundColor: '#FAFAFA' },
  networkContainer: { padding: 20 },
  networkHeaderContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  networkImage: { width: 24, height: 24, marginRight: 10 },
  networkTitleContainer: {},
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  searchTextContainer: {},
  searchImage: { width: 24, height: 24 },
  allNetworksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  allNetworksTextContainer: {},
  allNetworksImage: { width: 24, height: 24 },
  cryptoContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10
  },
  cryptoImage: { width: 48, height: 48, marginRight: 16 },
  cryptoTextContainer: {}
});