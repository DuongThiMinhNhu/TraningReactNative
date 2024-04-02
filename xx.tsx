import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

type CryptoInfoProps = {
  imageUrl: string;
  title: string;
};

const CryptoInfo: React.FC<CryptoInfoProps> = ({ imageUrl, title }) => (
  <View style={styles.cryptoContainer}>
    <Image resizeMode="cover" source={{ uri: imageUrl }} style={styles.cryptoImage} />
    <View style={styles.cryptoTextContainer}>
      <Text>{title}</Text>
    </View>
  </View>
);

const cryptoData = [
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2c47c7a90508203e606928235f7e7ee78d824668861d721c8397fe8a14763204?apiKey=8464a10641e64eedafa0614c81bab0cc&', title: 'Bitcoin' },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3f74ea254c99b7a1d54628a396e7bd8a82e11fbe627ec9837bf068d1a32de18e?apiKey=8464a10641e64eedafa0614c81bab0cc&', title: 'Ethereum' },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa95403e8e07078e76db96ff4cee8253d7307413b8c34c789e08048b35abaece?apiKey=8464a10641e64eedafa0614c81bab0cc&', title: 'BNB Beacon Chain' },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/24153051d633265f2c26e2836a4d67587bd1fded23eb96ded03b89b785496ee6?apiKey=8464a10641e64eedafa0614c81bab0cc&', title: 'XRP' },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/815255eac4eea0c530abc04a3212bcc612c73c9532896f00d93ad440a2b37673?apiKey=8464a10641e64eedafa0614c81bab0cc&', title: 'Cardano' },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f3f2832d9c3ed0613696d09175fec72ec53861335d742a966106f06c2ab15c36?apiKey=8464a10641e64eedafa0614c81bab0cc&', title: 'Polkadot' },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0742f202a105b59b0cacd9ea0488a27e515bdd626fe8ec0e8d9f56b5fa6acc6a?apiKey=8464a10641e64eedafa0614c81bab0cc&', title: 'Dogecoin' },
  { imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ac757872b652ca89606d06e3cd1e5c9724165fc0e19efd61f60c00e18192dfd2?apiKey=8464a10641e64eedafa0614c81bab0cc&', title: 'Solana' },
];

export const MyComponent: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.networkContainer}>
        <View style={styles.networkHeaderContainer}>
          <Image resizeMode="contain" source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e730f7c6087753a4b050e10cf5d6d5d59a9c160af4d463cde88b3e4af33424fe?apiKey=8464a10641e64eedafa0614c81bab0cc&' }} style={styles.networkImage} />
          <View style={styles.networkTitleContainer}>
            <Text>Network</Text>
          </View>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchTextContainer}>
            <Text>Search</Text>
          </View>
          <Image resizeMode="contain" source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5fe0a22731bb7c786e11145192d7bd3e2800c94ea494770fb2434770a2b5ebdb?apiKey=8464a10641e64eedafa0614c81bab0cc&' }} style={styles.searchImage} />
        </View>
        <View style={styles.allNetworksContainer}>
          <View style={styles.allNetworksTextContainer}>
            <Text>All Networks</Text>
          </View>
          <Image resizeMode="contain" source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b3b98c0ddc8caf3d52c3619b659c3b0ffbf0215625f4bd41ec5223288c43e7fb?apiKey=8464a10641e64eedafa0614c81bab0cc&' }} style={styles.allNetworksImage} />
        </View>
      </View>
      <FlatList
        data={cryptoData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <CryptoInfo imageUrl={item.imageUrl} title={item.title} />}
        style={styles.cryptoList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FAFAFA',
    display: 'flex',
    maxWidth: 480,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: '0 auto',
    padding: '80px 0',
  },
  networkContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: '0 25px',
  },
  networkHeaderContainer: {
    alignSelf: 'start',
    display: 'flex',
    alignItems: 'stretch',
    gap: 19,
    fontSize: 21,
    color: '#4871EA',
    fontWeight: '600',
    whiteSpace: 'nowrap',
  },
  networkImage: {
    fill: '#4871EA',
    alignSelf: 'start',
    position: 'relative',
    width: 8,
    flexShrink: 0,
    aspectRatio: '0.57',
  },
  networkTitleContainer: {
    fontFamily: 'Poppins, sans-serif',
  },
  searchContainer: {
    borderRadius: 47,
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.25)',
    backgroundColor: '#FAFAFA',
    display: 'flex',
    marginTop: 30,
    alignItems: 'stretch',
    gap: 20,
    fontSize: 16,
    color: '#909090',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    justifyContent: 'space-between',
    padding: '4px 6px 4px 20px',
  },
  searchTextContainer: {
    fontFamily: 'Poppins, sans-serif',
    margin: 'auto 0',
  },
  searchImage: {
    backgroundColor: '#4871EA',
    borderRadius: '50%',
    position: 'relative',
    width: 41,
    flexShrink: 0,
    height: 41,
    aspectRatio: '1',
  },
  allNetworksContainer: {
    alignSelf: 'end',
    display: 'flex',
    marginTop: 25,
    alignItems: 'stretch',
    gap: 15,
    fontSize: 15,
    color: '#7C7C7C',
    fontWeight: '400',
  },
  allNetworksTextContainer: {
    fontFamily: 'Poppins, sans-serif',
    margin: 'auto 0',
  },
  allNetworksImage: {
    borderRadius: 5,
    position: 'relative',
    width: 47,
    flexShrink: 0,
    aspectRatio: '1.02',
  },
  cryptoList: {
    marginTop: 31,
    padding: '0 25px',
  },
  cryptoContainer: {
    display: 'flex',
    marginTop: 26,
    alignItems: 'stretch',
    gap: 17,
    whiteSpace: 'nowrap',
  },
  cryptoImage: {
    position: 'relative',
    width: 43,
    flexShrink: 0,
    aspectRatio: '1',
  },
  cryptoTextContainer: {
    fontFamily: 'Poppins, sans-serif',
    margin: 'auto 0',
  },
});