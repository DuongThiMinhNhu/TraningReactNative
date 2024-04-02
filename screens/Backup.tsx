import * as React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Svg, {Path} from 'react-native-svg';
import { useNavigation} from '@react-navigation/native';
import { RootScreenNavigationProps } from '../type';

interface OptionProps {
  buttonText: string;
}
const ButtonOption: React.FC<OptionProps> = ({ buttonText }) => (
  <TouchableOpacity style={styles.buttonOption}>
    <Text style={styles.buttonText}>{buttonText}</Text>
  </TouchableOpacity>
);

const options = [
  { key: "manualBackup", text: "Backup Manually" },
  { key: "googleDriveBackup", text: "Backup to Google Drive" },
];

export default function Backup() {
  const navigation = useNavigation<RootScreenNavigationProps>();
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}> 
        <View style={styles.navigationArea}>
          <TouchableOpacity style={styles.backContainer} onPress={() => navigation.navigate('CreateAddWallet')}>
            <Svg viewBox= "0 0 10 14" fill="none" style={styles.backIcon}>
              <Path d="M9.57725 13.6918C9.82107 13.4945 9.95804 13.2268 9.95804 12.9477C9.95804 12.6686 9.82107 12.401 9.57725 12.2036L3.13934 6.99365L9.57725 1.78371C9.81416 1.5852 9.94525 1.31933 9.94229 1.04337C9.93933 0.767401 9.80254 0.503418 9.56141 0.308273C9.32026 0.113129 8.99406 0.00243855 8.65305 4.00543e-05C8.31204 -0.00235844 7.98351 0.103729 7.73822 0.295453L0.380794 6.24952C0.136972 6.44689 0 6.71456 0 6.99365C0 7.27273 0.136972 7.5404 0.380794 7.73777L7.73822 13.6918C7.98211 13.8892 8.31286 14 8.65773 14C9.0026 14 9.33335 13.8892 9.57725 13.6918Z" fill="#4871EA"/>
            </Svg>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipContainer}>
            <Text style={styles.skipText} >Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        resizeMode="contain"
        source={require('../assets/image4.png')}
        style={styles.Image}
      />
      <View style={styles.textArea}>
        <Text style={styles.titleText}>Implementing a Secret Phrase Backup Strategy</Text>
        <Text style={styles.descriptionText}>
          Secure your valuables by creating a backup of your secret passphrase.
        </Text>
      </View>
      {options.map((option) => (
        <ButtonOption key={option.key} buttonText={option.text} />
      ))}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    height: '100%',
    flexDirection: "column",
    alignItems: "stretch",
    padding: 20,
  },
  headerArea: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navigationArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backContainer: {
    flexDirection: "row",
    marginRight: 8,
    alignItems: "center",
  },
  backIcon: {
    marginRight: 16,
    width: 10,
    height:14,
  },
  backText:{
    color: "#4871EA",
    fontSize: 21,
    fontWeight: "700",
  },
  skipContainer: {
    backgroundColor: "rgba(144, 144, 144, 0.08)",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  skipText: {
    color: "#4871EA",
    fontSize: 14,
    fontWeight: "500",
  },
  Image: {
    alignSelf: "center",
    height: 275,
  },
  textArea: {
    marginBottom: 30,
  },
  titleText: {
    fontWeight: "500",
    fontSize: 21,
    textAlign: "center",
  },
  descriptionText: {
    marginTop: 12,
    textAlign: "center",
    fontSize: 14,
    color: "#909090",
  },
  buttonOption: {
    marginTop: 12,
    backgroundColor: "rgba(144, 144, 144, 0.08)",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 22,
    paddingHorizontal: 60,
    borderRadius: 8,
  },
  buttonText: {
    color: "#4871EA",
    fontSize: 16,
    fontWeight: "500",
  }, 
});