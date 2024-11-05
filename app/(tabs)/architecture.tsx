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

const architectureData = [
  {
    id: "1",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/1.JPG"),
    link: "/explore",
  },
  {
    id: "2",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/2.JPG"),
    link: "/explore",
  },
  {
    id: "3",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/3.JPG"),
    link: "/explore",
  },
  {
    id: "4",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/4.JPG"),
    link: "/explore",
  },
  {
    id: "5",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/5.JPG"),
    link: "/explore",
  },
  {
    id: "6",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/6.JPG"),
    link: "/explore",
  },
  {
    id: "7",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/7.JPG"),
    link: "/explore",
  },
  {
    id: "8",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/8.JPG"),
    link: "/explore",
  },
  {
    id: "9",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/9.JPG"),
    link: "/explore",
  },
  {
    id: "10",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/10.JPG"),
    link: "/explore",
  },
  {
    id: "11",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/11.JPG"),
    link: "/explore",
  },
  {
    id: "12",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/12.JPG"),
    link: "/explore",
  },
  {
    id: "13",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/13.JPG"),
    link: "/explore",
  },
  {
    id: "14",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/14.JPG"),
    link: "/explore",
  },
  {
    id: "15",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/15.JPG"),
    link: "/explore",
  },
  {
    id: "16",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/16.JPG"),
    link: "/explore",
  },
  {
    id: "17",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/17.JPG"),
    link: "/explore",
  },
  {
    id: "18",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/18.JPG"),
    link: "/explore",
  },
  {
    id: "19",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/19.JPG"),
    link: "/explore",
  },
  {
    id: "20",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/20.JPG"),
    link: "/explore",
  },
  {
    id: "21",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/21.JPG"),
    link: "/explore",
  },
  {
    id: "22",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/22.JPG"),
    link: "/explore",
  },
  {
    id: "23",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/23.JPG"),
    link: "/explore",
  },
  {
    id: "24",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/24.JPG"),
    link: "/explore",
  },
  {
    id: "25",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/25.JPG"),
    link: "/explore",
  },
  {
    id: "26",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/26.JPG"),
    link: "/explore",
  },
  {
    id: "27",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/27.JPG"),
    link: "/explore",
  },
  {
    id: "28",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/28.JPG"),
    link: "/explore",
  },
  {
    id: "29",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/29.JPG"),
    link: "/explore",
  },
  {
    id: "30",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/30.JPG"),
    link: "/explore",
  },
  {
    id: "31",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/31.JPG"),
    link: "/explore",
  },
  {
    id: "32",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/32.JPG"),
    link: "/explore",
  },
  {
    id: "33",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/33.JPG"),
    link: "/explore",
  },
  {
    id: "34",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/34.JPG"),
    link: "/explore",
  },
  {
    id: "35",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/35.JPG"),
    link: "/explore",
  },
  {
    id: "36",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/36.JPG"),
    link: "/explore",
  },
  {
    id: "37",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/37.JPG"),
    link: "/explore",
  },
  {
    id: "38",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/38.JPG"),
    link: "/explore",
  },
  {
    id: "39",
    title: "Explore the Mountains",
    imageUrl: require("../../assets/images/architecture/39.JPG"),
    link: "/explore",
  },
];

export default function Architecture() {
  return (
    <ThemedView style={styles.titleContainer}>
      <Image
        source={require("../../assets/images/white-icon.png")}
        style={styles.headerImage}
        resizeMode="contain"
      />
      <ThemedText type="title" style={styles.headerTitle}>
        ARCHITECTURE SHOOT
      </ThemedText>
      <ThemedText style={styles.description}>
        Discover breathtaking landscapes and vibrant cityscapes with
        ChopperShoot.
      </ThemedText>
    </ThemedView>
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
});
