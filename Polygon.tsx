import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from "react-native";

const Header = () => {
  return(
    <View style={styles.header}>
      <Image resizeMode="cover" source={require('./assets/iconoir_cancel.png')} style={styles.iconImage} />
      <View style={styles.headerText}>
        <Text style={styles.title}>Send Matic</Text>
      </View>
    </View>
  );
};

const InputAddress = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Address or Domain Name</Text>
      </View>
      <View style={styles.input}>
        <TextInput 
          style={styles.inputText} 
          placeholder="Enter" 
          placeholderTextColor={"#bdbdbd"} 
          onChangeText={text=> onChangeText(text)} 
          value={text}
        />
        {text ? (
          <TouchableOpacity style={styles.deleteButtom} onPress={() => onChangeText('') }>
            <Image resizeMode="cover" source={require('./assets/material-symbols_cancel.png')} style={styles.iconImage} /> 
          </TouchableOpacity >
        ) : null}
        <Image resizeMode="cover" source={require('./assets/bx_qr.png')} style={styles.iconImage} /> 
      </View>
      <TouchableOpacity style={styles.pasteButton}>
        <Text style={styles.pasteText}>Paste</Text>
      </TouchableOpacity>
    </View>
  );
};

const InputAmount = () => {
  return (
    <View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Amount</Text>
      </View>
      <View style={styles.input}>
        <TextInput style={styles.inputText} placeholder="MATIC Amount" placeholderTextColor={"#bdbdbd"} />
        <Text style={styles.maticText}>MATIC</Text>
        <TouchableOpacity>
          <Text style={styles.maxText}>Max</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.convert}>
      <Text style={styles.convertText}>≈ 0,00 $</Text>
      </View>
    </View>
  );
};

const ContinueButton = () => {
  return (
    <TouchableOpacity style={styles.continueButton}>
      <Text style={styles.continueText}>Continue</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <InputAddress/>
        <InputAmount/>
      </View>
      <ContinueButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#FAFAFA", 
    maxWidth: 480,  
    padding: 25, 
  },
  header: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 20, 
    paddingTop: 24,
  },
  iconImage: { 
    width: 24, 
    aspectRatio: 1, 
  },
  headerText: {
    flexGrow: 1, 
    justifyContent: "center",
    alignItems: "center", 
  },
  title: {
    color: "#4871EA",
    fontSize: 20, 
    fontWeight: "600",
    marginRight: 20,
  },
  content: {
    marginTop: 30,
  },
  description: { 
    marginTop: 10, 
    backgroundColor: "#FAFAFA",  
    display: "flex", 
    justifyContent: "space-between", 
  },
  descriptionText: {
    color: "#7C7C7C",
    fontSize: 14, 
  },
  input: {
    backgroundColor: "#FAFAFA",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row", 
    paddingLeft: 20,
    paddingRight: 15,
    borderRadius: 15,
    height: 70,
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
  inputText: { 
    flexGrow: 1, 
    justifyContent: "center",
    fontWeight: "500",
    fontSize: 16, 
  },
  deleteButtom: {
    marginRight: 20,
  },
  pasteButton: { 
    alignSelf: "flex-end", 
    marginTop: 16, 
  },
  pasteText: {
    color: "#4871EA",
    fontSize: 16, 
    fontWeight: "500",
  },
  maticText: {
    color: "#7C7C7C",
    fontSize: 16, 
    fontWeight: "500",
  },
  maxText: {
    color: "#4871EA",
    fontSize: 16, 
    fontWeight: "500",
    marginLeft: 20,
  },
  convert: {
    alignSelf: "flex-end", 
    marginTop: 12, 
  },
  convertText: {
    color: "#7C7C7C",
    fontSize: 12, 
    fontWeight: "500",
  },
  continueButton: { 
    backgroundColor: "rgba(144, 144, 144, 0.08)", 
    alignSelf: "center", 
    marginTop: 250, 
    width: "100%",
    justifyContent: "flex-end", 
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 19, 
    alignItems: "center",
  },
  continueText: {
    color: "#7C7C7C",
    fontSize: 16,
    fontWeight: "500", 
  },
});