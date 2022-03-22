export default function Cloudinary(props) {
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
    props.image(file.url); //put the url in local state, next step you can send it to the backend
  };

  return (
    <div>
      <input type="file" onChange={uploadImage} />
    </div>
  );
}
