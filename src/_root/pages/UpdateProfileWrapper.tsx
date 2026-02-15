//import { useParams } from "react-router-dom";
import UpdateProfile from "./UpdateProfile";

const UpdateProfileWrapper = () => {

  const someFieldChangeFunction = () => {
    // Implement the field change function
  };

  const someMediaUrl = "";

  return (
    <UpdateProfile fieldChange={someFieldChangeFunction} mediaUrl={someMediaUrl} />
  );
};

export default UpdateProfileWrapper;