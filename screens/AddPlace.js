import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlace = () => {
  const createPlaceHandler = async (place) => {
    await insertPlace(place);
  };
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
