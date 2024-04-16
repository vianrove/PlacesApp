import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "../../constants/colors";

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable
      onPress={onSelect}
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: place.imageUri }} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.primary50,
    marginHorizontal: 14,
    marginVertical: 7,
    borderRadius: 12,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.85,
  },
  imageContainer: {
    margin: 8,
    borderRadius: 12,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  info: {
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary800,
  },
  address: {
    color: Colors.primary700,
  },
});
