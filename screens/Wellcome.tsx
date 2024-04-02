import React from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useNavigation} from '@react-navigation/native';
import { RootScreenNavigationProps } from '../type';

const Header = () => {
  return (
    <View style={styles.header}>
    <ImageBackground source={require('../assets/image0.png')} resizeMode="cover" style={styles.headerBackground}>
      <Text style={styles.headerText}>TD WALLET</Text>
      <Svg viewBox="0 0 208 208" fill="none" style={styles.headerIcon}>
        <Path d="M104 15.1667L49.8333 106.167L104 138.667L158.167 106.167L104 15.1667ZM49.8333 117L104 192.833L158.167 117L104 149.5L49.8333 117Z" fill="#FAFAFA"/>
      </Svg>
      </ImageBackground>
    </View>
  );
};

const GetStartedButton = () => {
  const navigation = useNavigation<RootScreenNavigationProps>();
  return (
    <TouchableOpacity style={styles.getStartedButton} onPress={() => navigation.navigate('CreateAddWallet')}>
      <Text style={styles.getStartedButtonText}>Get Started</Text>
    </TouchableOpacity>
  );
};

const AgreementText = () => {
  return (
    <View style={styles.agreementTextView}>
      <Text style={styles.agreementText}>
        By tapping “Get Started” you agree and consent to our
        <Text style={styles.linkText}> Terms of Service </Text>
        and
        <Text style={styles.linkText}> Privacy Policy</Text>
      </Text>
    </View>
  );
};

export default function Wellcome() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <Text style={styles.introText }>Investing in cryptocurrency made easy.</Text>
      <GetStartedButton />
      <AgreementText />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		backgroundColor:  "#FAFAFA",
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  headerBackground: {
    width: '100%',
    height: 450,
    alignItems: 'center',
  },
  headerText: {
    color: "#FAFAFA",
    fontSize: 28,
    fontWeight: "400",
    marginTop: 65,
  },
  headerIcon: {
    marginTop: 40,
    width: 208,
    height: 208,
  },
  content: {
    width: "100%",
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  introText: {
    color: "#4871EA",
    fontSize: 26,
    fontWeight: "500",
    textAlign: "left",
  },
  getStartedButton: {
    borderRadius: 47,
    backgroundColor: "#4871EA",
    marginTop: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
  },
  getStartedButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "400",
  },
  agreementTextView: {
    marginTop: 20,
  },
  agreementText: {
    textAlign: "center",
    fontSize: 13,
  },
  linkText: {
    color: "#4871EA",
  },
});
