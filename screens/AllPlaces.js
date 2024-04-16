import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { StyleSheet, View } from "react-native";
import Button from "../components/ui/Button";

const AllPlaces = ({ route }) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  // useEffect hook to handle updates when route params change
  useEffect(() => {
    if (route.params && route.params.place) {
      // Update loadedPlaces only when a new place is passed via route params
      setLoadedPlaces((prevPlaces) => [...prevPlaces, route.params.place]);
    }
  }, [route.params]);

  const showPlaces = () => {
    console.log(loadedPlaces);
  };

  return (
    <View style={styles.container}>
      <PlacesList places={loadedPlaces} />
      <Button onPress={showPlaces}>Show Places</Button>
    </View>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
});
