import { useEffect, useState, useMemo } from "react";
import { useBlogHook } from "../../hooks/HookBlog/useBlogHook";

const POSTS_PER_PAGE = 5;

const BlogComponents: React.FC = () => {
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

  return (
    <section className="text-white w-150  ">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20 m-2 flex justify-center items-center flex-col ">
        <h1 className="text-black">Blog</h1>
        <div className="flex justify-center items-center flex-col ">
          {currentPosts.map((blog, index) => (
            <div
              className={`max-w-4xl m-4 p-4 border-b-4 border-gray-200 ${
                index !== currentPosts.length - 1 ? "mb-4" : ""
              } blog-container `}
              key={blog.id}
            >
              <h2>{blog.title}</h2>
              <p className="text-gray-500">
                {blog.publicationDate?.toLocaleString()}
              </p>
              <div className="blog-image">
              <img
                src={blog.imageUrl}
                alt={`Imagen del blog ${blog.title}`}
                className="w-full object-cover object-center rounded shadow-lg h-1/4"
              />
              </div>
              <div className="blog-text p-4 m-1  ">
                {blog.content ?? ""}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">{paginationButtons}</div>
      </div>
    </section>
  );
};

export default BlogComponents;