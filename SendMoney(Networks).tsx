import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { networkData } from "./networkData";

interface NetworkProps {
  logoUrl: any;
  name: string;
}

const NetworkInfo: React.FC<NetworkProps> = ({ logoUrl, name }) => (
  <View style={styles.networkContainer}>
    <Image resizeMode="cover" source={logoUrl} style={styles.networkImage} />
    <View style={styles.networkName}>
      <Text>{name}</Text>
    </View>
  </View>
);

export default function App() {
  const [searchText, onChangeSearchText] = React.useState('');
  const filteredNetwork = networkData.filter((item) => {
    return searchText === ""
    ? item
    : item.name.toLowerCase().includes(searchText.toLowerCase())
  })
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity >
          <Image resizeMode="cover" source={require('./assets/back-icon.png')} style={styles.backIcon}></Image>
        </TouchableOpacity>
        <View style={styles.headerText}>
          <Text style={styles.title}>Network</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchText} 
            placeholder="Search" 
            placeholderTextColor={"#909090"} 
            onChangeText={searchText=> onChangeSearchText(searchText)} 
            value={searchText}
          />
          {searchText ? (
            <TouchableOpacity style={styles.deleteButtom} onPress={() => onChangeSearchText('') }>
              <Image resizeMode="cover" source={require('./assets/material-symbols_cancel.png')} style={styles.backIcon} /> 
            </TouchableOpacity >
          ) : null}
          <TouchableOpacity>
            <Image resizeMode="cover" source={require('./assets/search-icon.png')} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.allNetworksContainer}>
          <Text style={styles.allNetworksText}>All Networks</Text>
          <TouchableOpacity >
            <Image resizeMode="cover" source={require('./assets/link-chain-icon.png')} style={styles.linkChainIcon} />
          </TouchableOpacity>
        </View>
        {filteredNetwork.length !== 0
        ? (
           <ScrollView style={styles.networkList}>
           {filteredNetwork.map((item, index) => (
             <NetworkInfo key={index} logoUrl={item.logoUrl} name={item.name}  />
           ))}
           </ScrollView>
          ) 
        : (
          <View style={styles.networkPlaceholderContainer}>
            <Image resizeMode="contain" source={require('./assets/tabler_cloud-search.png')} style={styles.networkPlaceholderImage} />
            <Text style={styles.networkPlaceholderText}>No result found.</Text>
          </View>
        ) }
      </View>
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
    padding: 20,
  },
  headerContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerText: {
    flexGrow: 1, 
    justifyContent: "center",
    alignItems: "center", 
  },
  title: {
    color: "#4871EA",
    fontSize: 21,
    fontWeight: "600",
    marginRight: 20,
  },
  contentContainer: {
    marginTop: 10,
  },
  searchContainer: {
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row", 
    paddingLeft: 20,
    paddingRight: 5,
    borderRadius: 47,
    height: 50,
    marginTop: 12,
    shadowColor: '#909090',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 14,
  },
  searchText: { 
    flexGrow: 1, 
    justifyContent: "center",
    fontWeight: "500",
    fontSize: 16, 
    width: '60%',
  },
  deleteButtom: {
    marginHorizontal: 10,
  },
  searchIcon:{
    width: 41,
    height: 41,
  },
  allNetworksContainer: { 
    flexDirection: "row",
    alignSelf: "flex-end", 
    marginTop: 20, 
    alignItems: 'center',
  },
  allNetworksText: {
    color: '#7C7C7C',
    fontSize: 15, 
    fontWeight: "400",
  },
  linkChainIcon:{
    width: 46,
    height: 47,
    marginLeft: 10,
  },
  networkList: {
    marginTop: 10,
    paddingHorizontal: 5,
    height: '70%',
  },
  networkContainer: {
    display: 'flex',
    marginBottom: 25,
    gap: 17,
    flexDirection: "row",
    alignItems: 'center',
  },
  networkImage: {
    position: 'relative',
    width: 43,
    flexShrink: 0,
    aspectRatio: '1',
  },
  networkName: {
    // marginVertical: 'auto',
  },
  networkPlaceholderContainer: {
    marginTop: 40,
    alignItems: "center",
  },
  networkPlaceholderImage: {
    width: 141,
    height: 141,
  },
  networkPlaceholderText: {
    marginTop: 10,
    color: "rgba(101, 138, 247, 0.76)",
    fontSize: 16,
    fontWeight: "400",
  },
});