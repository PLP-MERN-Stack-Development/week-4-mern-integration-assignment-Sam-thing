import { useState } from "react";
import { uploadService } from "../pages/services/uploadServices"; // <-- fix path and name

export default function ImageUpload({ onUpload }) {
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setPreview(URL.createObjectURL(file));

    try {
      const data = await uploadService.uploadImage(file); // <-- fix name
      onUpload(data.url);
    } catch (err) {
      console.error("Upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="my-4">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
      {preview && (
        <img src={preview} alt="Preview" className="mt-2 max-w-xs rounded shadow" />
      )}
    </div>
  );
}

<ImageUpload onUpload={(url) => setFormData({ ...formData, featuredImage: url })} />
