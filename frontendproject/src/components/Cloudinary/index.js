export default function Cloudinary(props) {
  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();

    data.append("file", files[0]);

    data.append("upload_preset", "iwmzf4bg");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/expshare/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    props.image(file.url);
  };

  return (
    <div>
      <input type="file" onChange={uploadImage} />
    </div>
  );
}
