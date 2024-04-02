import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

interface InfoCardProps {
  imageUri: string;
  textContent: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ imageUri, textContent }) => (
  <View style={styles.infoCardContainer}>
    <Image resizeMode="contain" source={{ uri: imageUri }} style={styles.infoCardImage} />
    <View style={styles.infoCardTextContainer}>
      <Text style={styles.infoCardContentText}>{textContent}</Text>
    </View>
  </View>
);

const MyComponent: React.FC = () => {
  const infoData = [
    {
      id: "1",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/24dc1c856f1fe0db6a5a8ca424324d892672b89604dadba41b8b3179e8943a04?apiKey=8464a10641e64eedafa0614c81bab0cc&",
      textContent: "TD Wallet ensures that no copies of your secret phrase are maintained.",
    },
    {
      id: "2",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/24dc1c856f1fe0db6a5a8ca424324d892672b89604dadba41b8b3179e8943a04?apiKey=8464a10641e64eedafa0614c81bab0cc&",
      textContent: "Write down your secret phrase, and store the written phrase in a secure offline location.",
    },
    {
      id: "3",
      imageUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/24dc1c856f1fe0db6a5a8ca424324d892672b89604dadba41b8b3179e8943a04?apiKey=8464a10641e64eedafa0614c81bab0cc&",
      textContent:
        "Avoid saving this digitally in plain text, whether through screenshots, text files, or emailing yourself, as it is not recommended.",
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <Image resizeMode="contain" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/efc68cc0d1395c555301f01fe0a553dfe49124698c9e007e794b1b3061858c96?apiKey=8464a10641e64eedafa0614c81bab0cc&" }} style={styles.topBannerImage} />
      <Image resizeMode="contain" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb3d5fbd28274f212b5ebef0741bc26cb6b2511ce7dede0ed300e9d64d7466af?apiKey=8464a10641e64eedafa0614c81bab0cc&" }} style={styles.topDividerImage} />
      <View style={styles.phraseInstructionContainer}>
        <Text style={styles.phraseInstructionText}>
          This secret phrase holds the key to unlocking your wallet.
        </Text>
      </View>
      <View style={styles.confirmationTextContainer}>
        <Text style={styles.confirmationText}>
          Confirm your understanding of the importance of your secret phrase by tapping on all checkboxes.
        </Text>
      </View>
      {infoData.map(data => (
        <InfoCard key={data.id} imageUri={data.imageUri} textContent={data.textContent} />
      ))}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FAFAFA",
    maxWidth: 480,
    width: "100%",
    alignItems: "center",
    margin: "0 auto",
    paddingVertical: 80,
  },
  topBannerImage: {
    alignSelf: "start",
    width: 10,
    margin: "4px 0 0 25px",
  },
  topDividerImage: {
    alignSelf: "stretch",
    marginTop: 11,
    width: "100%",
  },
  phraseInstructionContainer: {
    marginTop: 17,
    width: 339,
  },
  phraseInstructionText: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 20,
    lineHeight: 26,
    textAlign: "center",
  },
  confirmationTextContainer: {
    marginTop: 23,
  },
  confirmationText: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 14,
    lineHeight: 26,
    color: "#909090",
    textAlign: "center",
  },
  infoCardContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 35,
    width: "100%",
    maxWidth: 380,
    alignItems: "center",
    gap: 20,
  },
  infoCardImage: {
    width: 29,
    aspectRatio: 1,
  },
  infoCardTextContainer: {
    flex: 1,
    backgroundColor: "rgba(144, 144, 144, 0.08)",
    padding: 12,
    borderRadius: 8,
  },
  infoCardContentText: {
    fontFamily: "Poppins, sans-serif",
  },
  continueButton: {
    marginTop: 31,
    width: "100%",
    maxWidth: 380,
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 19,
    backgroundColor: "rgba(144, 144, 144, 0.08)",
  },
  continueButtonText: {
    fontFamily: "Poppins, sans-serif",
    fontSize: 16,
    color: "#7C7C7C",
  },
});

export default MyComponent;