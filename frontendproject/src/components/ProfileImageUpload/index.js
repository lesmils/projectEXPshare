/* eslint-disable jsx-a11y/alt-text */
import { Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateImage } from "../../store/user/actions";

export default function ProfileImageUpload() {
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    //first parameter is always upload_preset, second is the name of the preset
    data.append("upload_preset", "iwmzf4bg");

    //post request to Cloudinary, remember to change to your own link
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/expshare/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log("file", file); //check if you are getting the url back
    setImage(file.url); //put the url in local state, next step you can send it to the backend
    dispatch(updateImage(file.url));
    // DOESN'T WORK WITH DISPATCH IMAGE INSTEAD OF FILE.URL
  };

  return (
    <div style={{ textAlign: "center" }}>
      <input type="file" onChange={uploadImage} />
      <div>
        <img
          src={
            image
              ? image
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
          }
          style={{ width: 200 }}
        />
        {image ? <Typography>Succesfully uploaded!</Typography> : ""}
      </div>
    </div>
  );
}
