import axios from "axios";

export const uploadService = {
  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const res = await axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  },
};
