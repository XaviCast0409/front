import { useEffect, useState } from "react";
import { blogStore } from "../../store/blogStore";
import { Blog } from "storeType";

export function useBlog() {
  const { blog } = blogStore();
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

  return { blogData };
}
