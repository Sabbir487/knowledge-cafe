import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddByBookmarks, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} handleMarkAsRead={handleMarkAsRead} handleAddByBookmarks={handleAddByBookmarks} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;