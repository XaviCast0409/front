import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { useBlogHook } from "../../hooks/HookBlog/useBlogHook";

const BlogComponents: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const [blog, setBlog] = useState<any>(null); 
  /* const { blodPerId, handleGetBlogById } = useBlogHook() */
// handleGetBlogById usar esto
  useEffect(() => {
    console.log("useEffect BlogComponents, blogId:", blogId);
    const fetchBlog = async () => {
      console.log("Fetching blog with id:", blogId);
      try {
        const response = await axios.get(
          `http://localhost:3000/company-blog-byId/${blogId}`
        );
        console.log("Blog fetched:", response.data);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    /* handleGetBlogById(blogId) */
    fetchBlog();
  }, [blogId,/* blogId */]);

  if (!blog) {
    console.log("BlogComponents, blog is null");
    return <div>Cargando...</div>;
  }

  console.log("BlogComponents, blog:", blog);

  return (
    <section className="text-white w-150">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 m-2 flex justify-center items-center flex-col">
        <h1 className="text-black">Blog</h1>
        <div className="flex justify-center items-center flex-col">
          <div
            className={`max-w-4xl m-4 p-4 border-b-4 border-gray-200 ${
              blog ? "mb-4" : ""
            } blog-container`}
          >
            <h2>{blog.title}</h2>
            <p className="text-gray-500">
              {blog.publicationDate
                ? new Date(blog.publicationDate).toLocaleDateString("es-ES", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                : ""}
            </p>
            <div className="blog-image">
              <img
                src={blog.imageUrl}
                alt={`Imagen del blog ${blog.title}`}
                className="w-full object-cover object-center rounded shadow-lg h-1/4"
              />
            </div>
            <div className="blog-text p">{blog.content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default BlogComponents;

