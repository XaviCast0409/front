import { useEffect, useState } from "react";
import { blogStore } from "../../store/blogStore";
import { Blog } from "storeType";

export function useBlog() {
  const { blog, /* blogId */ } = blogStore();
  /* const[blodPerId, setBlogPerId] = useState({}) */
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    if (blog) {
      const newBlog = blog.map((item, index) => ({
        publicationDate: item.publicationDate, // 
        item: index + 1,
        id: item.id,
        title: item.title,
        content: item.content,
        imageUrl: item.imageUrl
      }));
      setBlogData(newBlog);
    }
  }, [blog]);

  /* 
    useEffect(() => {
    if (blog) {
      const newBlog = {
        publicationDate: blogId.publicationDate,
        id: blogId.id,
        title: blogId.title?.toUpperCase(),
        content: blogId.content?.slice(0, 100) + "...",
        imageUrl: blogId.imageUrl
      };
      }
      setBlogPerId(newBlog);
    }
  }, [blog]);
   */

  return { blogData, /* blodPerId */ };
}
