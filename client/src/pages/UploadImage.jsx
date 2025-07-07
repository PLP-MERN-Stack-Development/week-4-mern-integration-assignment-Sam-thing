import { useState } from "react";
import axios from "axios";

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const [uploadedFilename, setUploadedFilename] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return setMessage("No image selected!");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploadedFilename(res.data.filename || res.data.url?.split("/").pop());
      setMessage(`Upload successful: ${res.data.filename || res.data.url}`);
    } catch (err) {
      setMessage("Upload failed.");
    }
  };

  const handleDeleteImage = async () => {
    if (!uploadedFilename) return setMessage("No uploaded image to delete.");
    try {
      await axios.delete(`/api/upload/${uploadedFilename}`);
      setMessage("Image deleted.");
      setUploadedFilename("");
      setImage(null);
    } catch (err) {
      setMessage("Failed to delete image.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-200">
        <form onSubmit={handleUpload}>
          <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">
            Upload Image
          </h2>
          <input
            type="file"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-700 border border-gray-300 rounded mb-5 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition duration-200 shadow"
          >
            Upload
          </button>
          <p className="text-center text-sm text-gray-600 mt-6">{message}</p>
          {uploadedFilename && (
            <button
              type="button"
              onClick={handleDeleteImage}
              className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition duration-200 shadow"
            >
              Delete Uploaded Image
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
