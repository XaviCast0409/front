import React, { useState, useEffect } from "react";
import SideBarDashboard from "../DashboardConstructora/SideBarDashboard";

import { useBlogHook } from "../../../hooks/HookBlog/useBlogHook";
import axios from "axios";
import Modal from "../../../utils/Modal";
import { TableBlogs } from "./TableBlog";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogAdmiComponent: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [/* errorMessage */, setErrorMessage] = useState<string | null>(null);

  const { handleCreateBlog, getAllBlog, blogData, handleDeleteBlog } =
    useBlogHook();

  const createBlog = async () => {
    await handleCreateBlog({
      title,
      content,
      imageUrl: previewImageUrl ?? "",
    });
    setErrorMessage(null);
    setTitle("");
    setContent("");
    setPreviewImageUrl(null);
  };
  const handleImageUpload = async (event) => {
    setIsLoadingImage(true);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ImagenesConstructora");
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dj8g1egez/image/upload",
      formData
    );
    if (response.status === 200) {
      const data = response.data;
      setPreviewImageUrl(data.secure_url);
    } else {
      console.error("Error uploading image:", response.statusText);
    }
    setIsLoadingImage(false);
  };

  const handleModalSubmit = async () => {
    setIsModalOpen(false);
    await createBlog();
  };
  useEffect(() => {
    getAllBlog();
  }, [getAllBlog]);

  const deleteBlog = async (id) => {
    await handleDeleteBlog(id);
  };

  return (
    <div className="flex w-full">
      <SideBarDashboard />
      <div className="flex flex-col">
        <div className="w-full px-2 py-2">
          <TableBlogs blogs={blogData} setOpenModal={setIsModalOpen} />
        </div>
        {isModalOpen && (
          <Modal
            title="Publish"
            closeModal={() => setIsModalOpen(false)}
            className="flex flex-col justify-between bg-white rounded-md w-2/5 px-5 pb-5"
          >
            <p>Are you sure you want to publish this post?</p>
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-md p-4 px-4 border text-sm pt-2.5 outline-[#007bff] my-4"
              />
              <ReactQuill value={content} onChange={setContent} />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full rounded-md p-4 py-2.5 px-4 border text-sm outline-[#007bff] my-4"
              />
              {isLoadingImage ? (
                <div
                  className=" m-1 h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary_color border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite] mx-auto flex justify-center items-center"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              ) : (
                previewImageUrl && <img src={previewImageUrl} alt="Preview" />
              )}
            </div>
            <section className="mt-5">
              <button
                onClick={handleModalSubmit}
                className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
              >
                Confirm Publish
              </button>
            </section>
          </Modal>
        )}

        <div className="w-full px-2 py-2">
          <TableBlogs
            blogs={blogData}
            setOpenModal={setIsModalOpen}
            handleDeleteBlog={deleteBlog}
          />
        </div>

      </div>
    </div>
  );
};

export default BlogAdmiComponent;
