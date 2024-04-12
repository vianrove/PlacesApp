import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
const Map = () => {
  const region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} initialRegion={region} />;
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
