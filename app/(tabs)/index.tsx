import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const screenWidth = Dimensions.get("window").width;

const dummyData = [
  {
    id: "1",
    title: "Explore the Mountains",
    image: require("@/assets/images/white-icon.png"),
    link: "/expolore",
  },
  {
    id: "2",
    title: "Cityscape Views",
    image: require("@/assets/images/white-icon.png"),
    link: "/expolore",
  },
  {
    id: "3",
    title: "Beach Paradise",
    image: require("@/assets/images/white-icon.png"),
    link: "https://example.com/beach",
  },
  {
    id: "4",
    title: "Night Sky",
    image: require("@/assets/images/white-icon.png"),
    link: "https://example.com/nightsky",
  },
];

export default function HomeScreen() {
  const renderHeader = () => (
    <ThemedView style={styles.titleContainer}>
      <Image
        source={require("@/assets/images/white-icon.png")}
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

  const handlePress = (link: string) => {
    Linking.openURL(link).catch((err) =>
      console.error("Failed to open link:", err)
    );
  };

  return (
    <FlatList
      data={dummyData}
      keyExtractor={(item) => item.id}
      numColumns={2}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.link)}
          style={styles.itemContainer}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.itemTitle}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 20,
    backgroundColor: "#000",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  headerImage: {
    width: screenWidth * 0.6,
    height: screenWidth * 0.6,
    alignSelf: "center",
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  itemContainer: {
    flex: 1,
    margin: 4,
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    borderRadius: 8,
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});
