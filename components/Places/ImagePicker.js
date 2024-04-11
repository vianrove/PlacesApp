import { Alert, Image, StyleSheet, View, Text } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../ui/OutlinedButton";

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState();
  const [status, requestPermission] = useCameraPermissions();

  const verifyPermissions = async () => {
    if (status.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }

    if (status.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions",
        "You need to grand camera permissions to use this app."
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
  };

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <View>
      <View style={styles.imagePreview}>
        {imagePreview}
      </View>
      <OutlinedButton icon="camera" onPress={takeImageHandler} >Take image</OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
