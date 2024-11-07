import React, { useState } from "react";
import {
  Text,
  Image,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
  ScrollView,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
// import architectureData from "../../../db/architectureData.json";

const architectureData = [
  {
    id: "1",
    title: "KSA",
    imageUrl: "../assets/images/arch/ksa/1.jpg",
  },
  {
    id: "2",
    title: "Abu Dhabi",
    imageUrl: "../assets/images/arch/ksa/2.jpg",
  },
  {
    id: "3",
    title: "Dubai",
    imageUrl: "../assets/images/arch/ksa/3.jpg",
  },
  {
    id: "4",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/arch/4.jpg",
  },
  {
    id: "5",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/5.JPG",
  },
  {
    id: "6",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/6.JPG",
  },
  {
    id: "7",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/7.JPG",
  },
  {
    id: "8",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/8.JPG",
  },
  {
    id: "9",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/9.JPG",
  },
  {
    id: "10",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/10.JPG",
  },
  {
    id: "11",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/11.JPG",
  },
  {
    id: "12",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/12.JPG",
  },
  {
    id: "13",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/13.JPG",
  },
  {
    id: "14",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/14.JPG",
  },
  {
    id: "15",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/15.JPG",
  },
  {
    id: "16",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/16.JPG",
  },
  {
    id: "17",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/17.JPG",
  },
  {
    id: "18",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/18.JPG",
  },
  {
    id: "19",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/19.JPG",
  },
  {
    id: "20",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/20.JPG",
  },
  {
    id: "21",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/21.JPG",
  },
  {
    id: "22",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/22.JPG",
  },
  {
    id: "23",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/23.JPG",
  },
  {
    id: "24",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/24.JPG",
  },
  {
    id: "25",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/25.JPG",
  },
  {
    id: "26",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/26.JPG",
  },
  {
    id: "27",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/27.JPG",
  },
  {
    id: "28",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/28.JPG",
  },
  {
    id: "29",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/29.JPG",
  },
  {
    id: "30",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/30.JPG",
  },
  {
    id: "31",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/31.JPG",
  },
  {
    id: "32",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/32.JPG",
  },
  {
    id: "33",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/33.JPG",
  },
  {
    id: "34",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/34.JPG",
  },
  {
    id: "35",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/35.JPG",
  },
  {
    id: "36",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/36.JPG",
  },
  {
    id: "37",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/37.JPG",
  },
  {
    id: "38",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/38.JPG",
  },
  {
    id: "39",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/39.JPG",
  },
  {
    id: "40",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/40.JPG",
  },
  {
    id: "41",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/41.JPG",
  },
  {
    id: "42",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/42.JPG",
  },
  {
    id: "43",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/43.JPG",
  },
  {
    id: "44",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/44.JPG",
  },
  {
    id: "45",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/45.JPG",
  },
  {
    id: "46",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/46.JPG",
  },
  {
    id: "47",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/47.JPG",
  },
  {
    id: "48",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/48.JPG",
  },
  {
    id: "49",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/49.JPG",
  },
  {
    id: "50",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/50.JPG",
  },
  {
    id: "51",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/51.JPG",
  },
  {
    id: "52",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/52.JPG",
  },
  {
    id: "53",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/53.JPG",
  },
  {
    id: "54",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/54.JPG",
  },
  {
    id: "55",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/55.JPG",
  },
  {
    id: "56",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/56.JPG",
  },
  {
    id: "57",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/57.JPG",
  },
  {
    id: "58",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/58.JPG",
  },
  {
    id: "59",
    title: "Explore the Mountains",
    imageUrl: "../assets/images/architecture/59.JPG",
  },
];

// Get screen width to calculate item size
const { width } = Dimensions.get("window");

// Helper function to resolve image source based on item ID
const getImageSource = (id) => {
  const imageMap = {
    "1": require("../../../assets/images/arch/ksa/1.jpg"),
    "2": require("../../../assets/images/arch/ksa/2.jpg"),
    "3": require("../../../assets/images/arch/ksa/3.jpg"),
    "4": require("../../../assets/images/arch/ksa/4.jpg"),
    "5": require("../../../assets/images/arch/ksa/5.jpg"),
    "6": require("../../../assets/images/arch/ksa/6.jpg"),
    "7": require("../../../assets/images/arch/ksa/7.jpg"),
    "8": require("../../../assets/images/arch/ksa/8.jpg"),
    "9": require("../../../assets/images/arch/ksa/9.jpg"),
    "10": require("../../../assets/images/arch/ksa/10.jpg"),
    "11": require("../../../assets/images/arch/ksa/11.jpg"),
    "12": require("../../../assets/images/arch/ksa/12.jpg"),
    "13": require("../../../assets/images/arch/ksa/13.jpg"),
    "14": require("../../../assets/images/arch/ksa/14.jpg"),
    "15": require("../../../assets/images/arch/ksa/15.jpg"),
    "16": require("../../../assets/images/arch/ksa/16.jpg"),
    "17": require("../../../assets/images/arch/ksa/17.jpg"),
    "18": require("../../../assets/images/arch/ksa/18.jpg"),
    "19": require("../../../assets/images/arch/ksa/19.jpg"),
    "20": require("../../../assets/images/arch/ksa/20.jpg"),
    "21": require("../../../assets/images/arch/ksa/21.jpg"),
    "22": require("../../../assets/images/arch/ksa/22.jpg"),
    "23": require("../../../assets/images/arch/ksa/23.jpg"),
    "24": require("../../../assets/images/arch/ksa/24.jpg"),
    "25": require("../../../assets/images/arch/ksa/25.jpg"),
    "26": require("../../../assets/images/arch/ksa/26.jpg"),
    "27": require("../../../assets/images/arch/ksa/27.jpg"),
    "28": require("../../../assets/images/arch/ksa/28.jpg"),
    "29": require("../../../assets/images/arch/ksa/29.jpg"),
    "30": require("../../../assets/images/arch/ksa/30.jpg"),
    "31": require("../../../assets/images/arch/ksa/31.jpg"),
    "32": require("../../../assets/images/arch/ksa/32.jpg"),
    "33": require("../../../assets/images/arch/ksa/33.jpg"),
    "34": require("../../../assets/images/arch/ksa/34.jpg"),
    "35": require("../../../assets/images/arch/ksa/35.jpg"),
    "36": require("../../../assets/images/arch/ksa/36.jpg"),
    "37": require("../../../assets/images/arch/ksa/37.jpg"),
    "38": require("../../../assets/images/arch/ksa/38.jpg"),
    "39": require("../../../assets/images/arch/ksa/39.jpg"),
    "40": require("../../../assets/images/arch/ksa/40.jpg"),
    "41": require("../../../assets/images/arch/ksa/41.jpg"),
    "42": require("../../../assets/images/arch/ksa/42.jpg"),
    "43": require("../../../assets/images/arch/ksa/43.jpg"),
    "44": require("../../../assets/images/arch/ksa/44.jpg"),
    "45": require("../../../assets/images/arch/ksa/45.jpg"),
    "46": require("../../../assets/images/arch/ksa/46.jpg"),
    "47": require("../../../assets/images/arch/ksa/47.jpg"),
    "48": require("../../../assets/images/arch/ksa/48.jpg"),
    "49": require("../../../assets/images/arch/ksa/49.jpg"),
    "50": require("../../../assets/images/arch/ksa/50.jpg"),
    "51": require("../../../assets/images/arch/ksa/51.jpg"),
    "52": require("../../../assets/images/arch/ksa/52.jpg"),
    "53": require("../../../assets/images/arch/ksa/53.jpg"),
    "54": require("../../../assets/images/arch/ksa/54.jpg"),
    "55": require("../../../assets/images/arch/ksa/55.jpg"),
    "56": require("../../../assets/images/arch/ksa/56.jpg"),
    "57": require("../../../assets/images/arch/ksa/57.jpg"),
    "58": require("../../../assets/images/arch/ksa/58.jpg"),
    "59": require("../../../assets/images/arch/ksa/59.jpg"),
    // add other image mappings here...
  };
  return imageMap[id] || require("../../../assets/images/arch/ksa/1.jpg");
};

export default function ksaArchitecture() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Open modal at the selected image index
  const openModal = (index) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  // Render each image item
  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => openModal(index)}
      >
        <Image source={getImageSource(item.id)} style={styles.image} />
        <Text style={styles.itemTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <Image
          source={require("../../../assets/images/white-icon.png")}
          style={styles.headerImage}
          resizeMode="contain"
        />
        <ThemedText type="title" style={styles.headerTitle}>
          KSA ARCHITECT
        </ThemedText>
        <ThemedText style={styles.description}>
          Choppershoot's aerial shoot in Kingdom Of Saudi Arabia.
        </ThemedText>
      </ThemedView>
      <FlatList
        data={architectureData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
      />
      {/* Modal for draggable image slider */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalCloseButtonText}>✕</Text>
          </TouchableOpacity>

          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentOffset={{ x: selectedIndex * width, y: 0 }}
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.round(
                event.nativeEvent.contentOffset.x / width
              );
              setSelectedIndex(newIndex);
            }}
          >
            {architectureData.map((item, index) => (
              <View key={index} style={styles.imageWrapper}>
                <Image
                  source={getImageSource(item.id)}
                  style={styles.modalImage}
                  resizeMode="contain"
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  modalCloseButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
  modalCloseButtonText: {
    fontSize: 30,
    color: "#fff",
  },
  imageWrapper: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: "100%",
  },
});
