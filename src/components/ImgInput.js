import React, { useState, useRef } from "react";

function ImgInput(props) {
  const [meme, setMeme] = useState();

  const uploadedImage = useRef(null);

  const handleImage = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      console.log(current, "current");

      current.file = file;
      console.log(file, "file");

      reader.onload = (e) => {
        current.src = e.target.result;
        setMeme(uploadedImage.current.src)
      };
      reader.readAsDataURL(file);
    }

    console.log(uploadedImage.current, "uploadedImage");
  };

  console.log(meme, "meme");

  const fileSelect = document.getElementById("fileSelect"),
     fileElem = document.getElementById("fileElem");

  if (fileSelect){

    fileSelect.addEventListener(
        "click",
        function (e) {
          if (fileElem) {
            fileElem.click();
          }
        },
        false
      );
  }


  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImage}
        id="fileElem"
        style={{ display: "none" }}
      />
        <button id="fileSelect">Add Image</button>

      <div >
          <h1>IMAGE</h1>
        <img src={meme} alt={meme ? "user avatar" : ""} />
      </div>
      <img
        alt="useuser avatar"
        ref={uploadedImage}
        style={{ display: "none" }}
      />
    </div>
  );
}
export default ImgInput;
