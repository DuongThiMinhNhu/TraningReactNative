import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { RootScreenNavigationProps } from '../type';

export default function CreateAddWallet() {
  const navigation = useNavigation<RootScreenNavigationProps>();
  return (
    <View style={styles.container}>
      <Image style={styles.image}
      source={require('../assets/image1.png')}>
      </Image>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Join 80M+ people sharing the future of the internet with us
        </Text>
      </View>
      <TouchableOpacity style={styles.OptionContainer} onPress={() => navigation.navigate('Backup')}>
        <Image resizeMode="contain" source={require('../assets/image2.png')} style={styles.OptionImage} />
        <View style={styles.OptionTextContainer}>
          <Text style={styles.OptionTitle}>Create new wallet</Text>
          <Text style={styles.OptionDescription}>Secret phrase or swift wallet</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.OptionContainer} onPress={() => navigation.navigate('CreateAddWallet')}>
        <Image resizeMode="contain" source={require('../assets/image2.png')} style={styles.OptionImage} />
        <View style={styles.OptionTextContainer}>
          <Text style={styles.OptionTitle}>Add existing wallet</Text>
          <Text style={styles.OptionDescription}>Import, restore or view-only</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    display: 'flex',
    maxWidth: 480,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    marginTop: 10,
    width: 400,
    height: 420,
  },
  headerContainer: {
    marginTop: 26,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#2B2D42',
    textAlign: 'center',
    letterSpacing: 0.4,
    fontSize: 20,
  },
  OptionContainer: {
    borderRadius: 8,
    backgroundColor: 'rgba(144, 144, 144, 0.08)',
    display: 'flex',
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    width: '100%',
  },
  OptionImage: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  OptionTextContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  OptionTitle: {
    color: '#4871EA',
    fontSize: 14,
  },
  OptionDescription: {
    color: '#7C7C7C',
    marginTop: 5,
    fontSize: 12,
  },
  mainImage: {
    marginTop: 35,
    width: 145,
    height: 44,
  },
});
