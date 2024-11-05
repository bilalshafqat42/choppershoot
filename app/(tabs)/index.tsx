import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  Dimensions,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

const { width } = Dimensions.get("window");
const itemSize = (width - 40) / 2; // Calculate size for two columns

const dummyData = [
  {
    id: "1",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/white-icon.png"),
    link: "/explore",
  },
  {
    id: "2",
    title: "Cityscape Views",
    imageUrl: require("../../assets/images/white-icon.png"),
    link: "/explore",
  },
  {
    id: "3",
    title: "Beach Paradise",
    imageUrl: require("../../assets/images/white-icon.png"),
    link: "/explore",
  },
  {
    id: "4",
    title: "Night Sky",
    imageUrl: require("../../assets/images/white-icon.png"),
    link: "/explore",
  },
];

export default function HomeScreen() {
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
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        numColumns={2} // Two columns
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <Link href={item.link} style={styles.linkContainer}>
            <View style={styles.itemContainer}>
              <Image source={item.imageUrl} style={styles.image} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
          </Link>
        )}
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
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  listContainer: {
    paddingBottom: 20,
    justifyContent: "center", // Center items in the list
    alignContent: "center",
  },
  itemContainer: {
    width: (width - 40) / 2, // Adjust width dynamically
    height: (width - 40) / 2, // Adjust height to match width for square items
    margin: 10, // Margin for spacing around items
    backgroundColor: "#1a1a1a", // Darker background for items
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: (width - 40) / 2 - 40, // Adjust width for image
    height: (width - 40) / 2 - 40, // Adjust height for image
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  linkContainer: {
    flex: 1,
  },
});
