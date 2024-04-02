import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Divider} from '@rneui/themed';

interface MenuItemProps {
  uri: any;
  text: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ uri, text }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Image resizeMode="cover" source={uri} style={styles.menuIcon} />
    <Text style={styles.menuText}>{text}</Text>
  </TouchableOpacity>
);

const menuData1 = [
  { uri: require('./assets/help-icon.png'), text: "Help Center" },
  { uri: require('./assets/about-icon.png'), text: "About" },
  { uri: require('./assets/support-icon.png'), text: "Support" }
];

const menuData2 = [
  { uri: require('./assets/facebook-icon.png'), text: "Facebook" },
  { uri: require('./assets/telegram-icon.png'), text: "Telegram" },
  { uri: require('./assets/reddit-icon.png'), text: "Reddit" },
  { uri: require('./assets/youtube-icon.png'), text: "Youtube" },
  { uri: require('./assets/instagram-icon.png'), text: "Instagram" },
  { uri: require('./assets/logout-icon.png'), text: "Logout" },
];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
        <Image resizeMode="cover" source={require('./assets/back-icon.png')} style={styles.backIcon}></Image>
        </TouchableOpacity> 
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Settings</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {menuData1.map((item, index) => (
          <MenuItem key={index} uri={item.uri} text={item.text}  />
        ))}
      </View>
      <Divider/>
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Image resizeMode="cover" source={require('./assets/preferences-icon.png')} style={styles.menuIcon} />
          <Text style={styles.menuText}>Preferences</Text>
        </TouchableOpacity>
      </View>
      <Divider/>
      <View style={styles.contentContainer}>
        {menuData2.map((item, index) => (
          <MenuItem key={index} uri={item.uri} text={item.text}  />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },
  header: {
    padding: 20,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  titleContainer:{
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    color: "#4871EA",
    fontSize: 20,
    fontWeight: "700", 
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  menuText: {
    fontSize: 16,
    fontWeight: "400",
  },
});