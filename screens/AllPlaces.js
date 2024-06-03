import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { StyleSheet, View } from "react-native";
import { fetchPlaces } from "../util/database";

const AllPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  // useEffect hook to handle updates when route params change
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }
    loadPlaces();
  }, []);

  return (
    <View style={styles.container}>
      <PlacesList places={loadedPlaces} />
    </View>
  );
};

export default AllPlaces;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
});
