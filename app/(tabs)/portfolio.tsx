import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  ScrollView,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";

const itemWidth = 400;
const itemHeight = 600;

const dummyData = [
  {
    id: "1",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/gallery.jpg"),
    link: "/explore",
  },
  {
    id: "2",
    title: "Cityscape Views",
    imageUrl: require("../../assets/images/gallery.jpg"),
    link: "/explore",
  },
  {
    id: "3",
    title: "Beach Paradise",
    imageUrl: require("../../assets/images/gallery.jpg"),
    link: "/explore",
  },
  {
    id: "4",
    title: "Night Sky",
    imageUrl: require("../../assets/images/gallery.jpg"),
    link: "/explore",
  },
];

export default function PortfolioScreen() {
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
    <ScrollView style={styles.container}>
      {renderHeader()}
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContainer}
        renderItem={({ item }) => (
          <Link href={item.link} style={styles.linkContainer}>
            <View style={styles.itemContainer}>
              <Image source={item.imageUrl} style={styles.image} />
              <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
          </Link>
        )}
        snapToAlignment="center"
        snapToInterval={itemWidth + 20} // Adds spacing between items for snapping
        decelerationRate="fast"
      />
    </ScrollView>
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
    paddingBottom: 20,
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
  carouselContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: itemWidth,
    height: itemHeight,
    marginHorizontal: 10,
    backgroundColor: "#000", // Darker background for items
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
    width: itemWidth - 40,
    height: itemHeight - 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    marginTop: 10,
  },
  linkContainer: {
    flex: 1,
  },
});
