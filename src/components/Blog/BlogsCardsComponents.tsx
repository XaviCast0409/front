import { Link } from "react-router-dom";
import { useBlogHook } from "../../hooks/HookBlog/useBlogHook";
import { useEffect, useState, useMemo } from "react";

const POSTS_PER_PAGE = 5;

const BlogsCardsComponents: React.FC = () => {
  const { blogData, getAllBlog } = useBlogHook();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllBlog();
  }, [getAllBlog]);

  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * POSTS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
    return blogData.slice(indexOfFirstPost, indexOfLastPost);
  }, [blogData, currentPage]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const paginationButtons = useMemo(
    () =>
      Array(Math.ceil(blogData.length / POSTS_PER_PAGE))
        .fill(null)
        .map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-3 py-1 mx-1 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            } rounded-md focus:outline-none focus:ring focus:ring-blue-300`}
            aria-label={`Ir a la página ${index + 1}`}
          >
            {index + 1}
          </button>
        )),
    [blogData.length, currentPage]
  );

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    const truncatedText = text.substr(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(" ");
    return lastSpaceIndex === -1 ? truncatedText : truncatedText.substr(0, lastSpaceIndex) + " ...";
  };
  

  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="text-black">All Blogs</h1>
      <div className="flex flex-col justify-center items-center  w-full h-full">
  {currentPosts.map((blog, index) => (
    <div
      className={`max-w-4xl m-6  border-b-4  ${
        index !== currentPosts.length - 1 ? "mb-4" : ""
      } blog-container `}
      key={blog.id}
    >
      <div className="custom-card h-full flex flex-col justify-between ">
        <div className="w-full h-full">
        <img
          src={blog.imageUrl}
          alt={`Imagen del blog ${blog.title}`}
          className="w-full  object-cover object-center rounded shadow-lg"
        />
         </div>
         <div className="w-full h-full">
        <div className="flex flex-col justify-center m-4 flex-grow ">
          <h3>{blog.title}</h3>
          <p className="text-white">
            {blog.content ? truncateText(blog.content, 250) : ""}
          </p>
          <p className="text-white font-thin">
            {blog.publicationDate
              ? new Date(blog.publicationDate).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : ""}
          </p>
          <Link
            to="/blog"
            className="text-white hover:underline text-center m-1 bold"
          >
            Leer más
          </Link>
        </div>
        </div>
      </div>
    </div>
  ))}
</div>

      <div className="flex justify-center mt-4">{paginationButtons}</div>
    </section>
  );
};

export default BlogsCardsComponents;
