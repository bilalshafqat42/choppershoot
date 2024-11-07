import React, { useState } from "react";
import {
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // For navigation
import archData from "../../db/archData.json"; // Assuming you still have access to this
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// Get screen width to calculate item size
const { width } = Dimensions.get("window");

// Helper function to resolve image source and link based on item ID
const getImageSourceAndLink = (id) => {
  const imageMap = {
    "1": {
      source: require("../../assets/images/arch/ksa/1.jpg"),
      link: "architecture/ksa-architect",
      title: "KSA",
    },
    "2": {
      source: require("../../assets/images/arch/ksa/2.jpg"),
      link: "architecture/abu-dhabi-architect",
      title: "Abu Dhabi",
    },
    "3": {
      source: require("../../assets/images/arch/ksa/3.jpg"),
      link: "architecture/dubai-architect",
      title: "Dubai",
    },
  };
  return (
    imageMap[id] || {
      source: require("../../assets/images/arch/ksa/1.jpg"),
      link: "architecture/dubai-architect",
    }
  );
};

export default function Architecture() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Get only the first 6 items for the small view
  const smallData = archData.slice(0, 6);

  const navigation = useNavigation(); // Access the navigation prop

  // Open modal at the selected image index
  const openModal = (index) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  // Render each image item
  const renderItem = ({ item, index }) => {
    const { source, link } = getImageSourceAndLink(item.id);

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => navigation.navigate(link)} // Navigate to the linked screen
        >
          <Image source={source} style={styles.image} />
          <Text style={styles.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Image
          source={require("../../assets/images/white-icon.png")}
          style={styles.headerImage}
          resizeMode="contain"
        />
        <ThemedText type="title" style={styles.headerTitle}>
          CHOPPERSHOOT ARCHITECT
        </ThemedText>
        <ThemedText style={styles.description}>
          Choppershoot architect's aerial images in Abu Dhabi, Dubai & KSA
        </ThemedText>
      </ThemedView>

      <FlatList
        data={smallData} // Use the small data subset here
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
    backgroundColor: "#000",
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
    width: width / 3 - 20,
    height: width / 3 - 20,
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
