// import React from "react";
// import {
//   Text,
//   Image,
//   StyleSheet,
//   FlatList,
//   View,
//   Dimensions,
//   TouchableOpacity,
//   Linking,
// } from "react-native";
// import { ThemedText } from "@/components/ThemedText";
// import { ThemedView } from "@/components/ThemedView";
// import { Link } from "expo-router";

// const screenWidth = Dimensions.get("window").width;

// const dummyData = [
//   {
//     id: "1",
//     title: "Explore the Mountains",
//     image: require("@/assets/images/white-icon.png"),
//     link: "/expolore",
//   },
//   {
//     id: "2",
//     title: "Cityscape Views",
//     image: require("@/assets/images/white-icon.png"),
//     link: "/expolore",
//   },
//   {
//     id: "3",
//     title: "Beach Paradise",
//     image: require("@/assets/images/white-icon.png"),
//     link: "https://example.com/beach",
//   },
//   {
//     id: "4",
//     title: "Night Sky",
//     image: require("@/assets/images/white-icon.png"),
//     link: "https://example.com/nightsky",
//   },
// ];

// export default function HomeScreen() {
//   const renderHeader = () => (
//     <ThemedView style={styles.titleContainer}>
//       <Image
//         source={require("@/assets/images/white-icon.png")}
//         style={styles.headerImage}
//         resizeMode="contain"
//       />
//       <ThemedText type="title" style={styles.headerTitle}>
//         CHOPPERSHOOT
//       </ThemedText>
//       <ThemedText style={styles.description}>
//         Discover breathtaking landscapes and vibrant cityscapes with
//         ChopperShoot.
//       </ThemedText>
//     </ThemedView>
//   );

//   const handlePress = (link: string) => {
//     Linking.openURL(link).catch((err) =>
//       console.error("Failed to open link:", err)
//     );
//   };

//   return (
//     <FlatList
//       data={dummyData}
//       keyExtractor={(item) => item.id}
//       numColumns={2}
//       ListHeaderComponent={renderHeader}
//       contentContainerStyle={styles.listContainer}
//       renderItem={({ item }) => (
//         <TouchableOpacity
//           onPress={() => handlePress(item.link)}
//           style={styles.itemContainer}
//         >
//           <Image source={item.image} style={styles.image} />
//           <Text style={styles.itemTitle}>{item.title}</Text>
//         </TouchableOpacity>
//       )}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     padding: 20,
//     backgroundColor: "#000",
//     alignItems: "center",
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   description: {
//     fontSize: 16,
//     color: "#fff",
//     textAlign: "center",
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   headerImage: {
//     width: screenWidth * 0.6,
//     height: screenWidth * 0.6,
//     alignSelf: "center",
//   },
//   listContainer: {
//     paddingHorizontal: 10,
//     paddingBottom: 20,
//   },
//   itemContainer: {
//     flex: 1,
//     margin: 4,
//     backgroundColor: "#f8f8f8",
//     borderRadius: 8,
//     padding: 10,
//     alignItems: "center",
//   },
//   image: {
//     width: screenWidth * 0.4,
//     height: screenWidth * 0.4,
//     borderRadius: 8,
//     marginBottom: 5,
//   },
//   itemTitle: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#333",
//     textAlign: "center",
//   },
// });
// imageUrl: require("../../assets/images/white-icon.png"), // Adjusted path
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
const itemSize = (width - 40) / 2; // Sets both width and height for each item

const dummyData = [
  {
    id: "1",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/white-icon.png"), // Adjusted path
    link: "/explore",
  },
  {
    id: "2",
    title: "Cityscape Views",
    imageUrl: require("../../assets/images/white-icon.png"), // Adjusted path
    link: "/explore",
  },
  {
    id: "3",
    title: "Beach Paradise",
    imageUrl: require("../../assets/images/white-icon.png"), // Adjusted path
    link: "/explore",
  },
  {
    id: "4",
    title: "Night Sky",
    imageUrl: require("../../assets/images/white-icon.png"), // Adjusted path
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
        numColumns={2}
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
    paddingRight: 20,
    paddingBottom: 40,
    paddingLeft: 20,
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
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  itemContainer: {
    width: itemSize,
    height: itemSize,
    margin: 8,
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
    width: itemSize - 40,
    height: itemSize - 40,
    borderRadius: 10,
    // marginTop: 20,
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
