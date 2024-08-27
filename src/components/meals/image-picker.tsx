"use client";
import React, { useRef, useState } from "react";
import classes from "./image-picker.module.css";
type ImagePicker = {
  label: string;
  name: string;
};
export default function ImagePicker({ label, name }: ImagePicker) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef<HTMLInputElement | null>(null);
  function handlePickClick() {
    if (imageInput.current === null) throw new Error("Image picker");
    imageInput.current.click();
  }
  function handleImageChange(e: { target: { files: any[] } }) {
    const file = e.target.files[0];
    if (!file) setPickedImage(null);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={() => handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
