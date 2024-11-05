import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import architectureData from "../../db/architectureData.json";

// Get screen width to calculate item size
const { width } = Dimensions.get("window");

// Helper function to resolve image source based on item ID
const getImageSource = (id) => {
  const imageMap = {
    "1": require("../../assets/images/arch/1.jpg"),
    "2": require("../../assets/images/arch/2.jpg"),
    "3": require("../../assets/images/arch/3.jpg"),
    "4": require("../../assets/images/arch/4.jpg"),
    "5": require("../../assets/images/arch/5.jpg"),
    "6": require("../../assets/images/arch/6.jpg"),
    "7": require("../../assets/images/arch/7.jpg"),
    "8": require("../../assets/images/arch/8.jpg"),
    "9": require("../../assets/images/arch/9.jpg"),
    "10": require("../../assets/images/arch/10.jpg"),
    "11": require("../../assets/images/arch/11.jpg"),
    "12": require("../../assets/images/arch/12.jpg"),
    "13": require("../../assets/images/arch/13.jpg"),
    "14": require("../../assets/images/arch/14.jpg"),
    "15": require("../../assets/images/arch/15.jpg"),
    "16": require("../../assets/images/arch/16.jpg"),
    "17": require("../../assets/images/arch/17.jpg"),
    "18": require("../../assets/images/arch/18.jpg"),
    "19": require("../../assets/images/arch/19.jpg"),
    "20": require("../../assets/images/arch/20.jpg"),
    "21": require("../../assets/images/arch/21.jpg"),
    "22": require("../../assets/images/arch/22.jpg"),
    "23": require("../../assets/images/arch/23.jpg"),
    "24": require("../../assets/images/arch/24.jpg"),
    "25": require("../../assets/images/arch/25.jpg"),
    "26": require("../../assets/images/arch/26.jpg"),
    "27": require("../../assets/images/arch/27.jpg"),
    "28": require("../../assets/images/arch/28.jpg"),
    "29": require("../../assets/images/arch/29.jpg"),
    "30": require("../../assets/images/arch/30.jpg"),
    "31": require("../../assets/images/arch/31.jpg"),
    "32": require("../../assets/images/arch/32.jpg"),
    "33": require("../../assets/images/arch/33.jpg"),
    "34": require("../../assets/images/arch/34.jpg"),
    "35": require("../../assets/images/arch/35.jpg"),
    "36": require("../../assets/images/arch/36.jpg"),
    "37": require("../../assets/images/arch/37.jpg"),
    "38": require("../../assets/images/arch/38.jpg"),
    "39": require("../../assets/images/arch/39.jpg"),
    "40": require("../../assets/images/arch/40.jpg"),
    "41": require("../../assets/images/arch/41.jpg"),
    "42": require("../../assets/images/arch/42.jpg"),
    "43": require("../../assets/images/arch/43.jpg"),
    "44": require("../../assets/images/arch/44.jpg"),
    "45": require("../../assets/images/arch/45.jpg"),
    "46": require("../../assets/images/arch/46.jpg"),
    "47": require("../../assets/images/arch/47.jpg"),
    "48": require("../../assets/images/arch/48.jpg"),
    "49": require("../../assets/images/arch/49.jpg"),
    "50": require("../../assets/images/arch/50.jpg"),
    "51": require("../../assets/images/arch/51.jpg"),
    "52": require("../../assets/images/arch/52.jpg"),
    "53": require("../../assets/images/arch/53.jpg"),
    "54": require("../../assets/images/arch/54.jpg"),
    "55": require("../../assets/images/arch/55.jpg"),
    "56": require("../../assets/images/arch/56.jpg"),
    "57": require("../../assets/images/arch/57.jpg"),
    "58": require("../../assets/images/arch/58.jpg"),
    "59": require("../../assets/images/arch/59.jpg"),
  };
  return imageMap[id] || require("../../assets/images/arch/1.jpg");
};

export default function Architecture() {
  // Render each image item
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.linkContainer}>
        <Image source={getImageSource(item.id)} style={styles.image} />
        <Text style={styles.itemTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  // Render header component
  const renderHeader = () => (
    <ThemedView style={styles.titleContainer}>
      <Image
        source={require("../../assets/images/white-icon.png")}
        style={styles.headerImage}
        resizeMode="contain"
      />
      <ThemedText type="title" style={styles.headerTitle}>
        CHOPPERSHOOT
      </ThemedText>
      <ThemedText style={styles.description}>
        Discover breathtaking landscapes and vibrant cityscapes with
        ChopperShoot.
      </ThemedText>
    </ThemedView>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      <FlatList
        data={architectureData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background for the entire screen
  },
  titleContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 40,
    backgroundColor: "#000",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
  description: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 25,
  },
  headerImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width / 3 - 20, // Fit 3 images per row
    height: width / 3 - 20, // Keep image square
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  linkContainer: {
    alignItems: "center",
  },
});
