import { useEffect, useState } from "react";
import { blogStore } from "../../store/blogStore";
import { Blog } from "storeType";

export function useBlog() {
  const { blog } = blogStore();
  const [blogById, setBlogId] = useState<number | null>(null); 
  const [blogData, setBlogData] = useState<Blog[]>([]);

  useEffect(() => {
    if (blog) {
      const newBlog = blog.map((item) => {
        if (!item) {
          throw new Error(`null pointer reference in blog item index ${blog.indexOf(item)}`);
        }
        return ({
          publicationDate: item.publicationDate,
          item: blog.indexOf(item) + 1,
          id: item.id,
          title: item.title,
          content: item.content,
          imageUrl: item.imageUrl,
        });
      });
      setBlogData(newBlog);
    }
  }, [blog]);

  useEffect(() => {
    if (blog) {
      const blogIds = blog.map(item => item.id);
      const lastBlogId = blogIds[blogIds.length - 1] ?? null;
      if (lastBlogId === null) {
        console.warn('last blog id is null');
      }
      setBlogId(lastBlogId);
    }
  }, [blog]);
  return { blogData, blogById }
}

