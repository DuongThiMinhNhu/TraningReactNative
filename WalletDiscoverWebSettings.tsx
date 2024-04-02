import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, FlatList} from 'react-native';

interface IconTextButtonProps {
  uri: any;
  buttonText: string;
}

const IconTextButton: React.FC<IconTextButtonProps> = ({ uri, buttonText }) => (
  
  <View style={styles.iconTextButtonContainer}>
    <TouchableOpacity>
      <Image resizeMode="contain" source={uri} style={styles.buttonIcon} />
    </TouchableOpacity>
    <Text style={styles.buttonText}>{buttonText}</Text>
  </View>
);

const iconButtonsData = [
  { key: '1', uri: require('./assets/send-icon.png'), buttonText: "Send" },
  { key: '2', uri: require('./assets/receive-icon.png'), buttonText: "Receive" },
  { key: '3', uri: require('./assets/buy-icon.png'), buttonText: "Buy" },
  { key: '4', uri: require('./assets/more-icon.png'), buttonText: "More" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background-1.png')} resizeMode="cover" style={styles.background}>
        <View style={styles.headerContainer}>
          <TouchableOpacity >
            <Image resizeMode="cover" source={require('./assets/back-icon.png')} style={styles.backIcon}></Image>
          </TouchableOpacity>
          <TouchableOpacity >
            <Image resizeMode="cover" source={require('./assets/info-blue-icon.png')} style={styles.infoIcon}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.balanceContainer}>
            <Text style={styles.maticAmountText}>0 MATIC</Text>
            <Text style={styles.usdAmountText}>$0.00</Text>
          </View>
          <FlatList
            data={iconButtonsData}
            horizontal
            renderItem={({ item }) => <IconTextButton uri={item.uri} buttonText={item.buttonText} />}
            keyExtractor={(item) => item.key}
            style={styles.iconsContainer}
          />
          <View style={styles.transactionPlaceholderContainer}>
            <Image resizeMode="contain" source={require('./assets/tabler_cloud-search.png')} style={styles.transactionPlaceholderImage} />
            <Text style={styles.transactionPlaceholderText}>Transactions will appear here.</Text>
          </View>
          <View style={styles.buyMaticContainer}>
          <TouchableOpacity>
            <Text style={styles.buyMaticText}>Buy MATIC</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    flex: 1,
    maxWidth: 480,
    width: "100%",
    height: "100%",
  },
  background: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  infoIcon: {
    width: 24,
    height: 24,
  },
  contentContainer: {
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  balanceContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  maticAmountText: {
    color: "#2B2D42",
    fontSize: 36,
    fontWeight: "700",
  },
  usdAmountText: {
    color: "#909090",
    fontSize: 22,
    fontWeight: "400",
  },
  iconsContainer: {
    flexDirection: "row",
    marginTop: 20,
    height: 80,
  },
  iconTextButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  buttonIcon: {
    width: 48,
    height: 43,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 14,
    color: "#4871EA",
  },
  transactionPlaceholderContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  transactionPlaceholderImage: {
    width: 141,
    height: 141,
  },
  transactionPlaceholderText: {
    marginTop: 10,
    color: "rgba(101, 138, 247, 0.76)",
    fontSize: 16,
    fontWeight: "400",
  },
  buyMaticContainer: {
    marginTop: 40,
  },
  buyMaticText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0227D8',
  },
});