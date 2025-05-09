import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddByBookmarks, handleMarkAsRead }) => {
    const { title, id, cover_img, author_img, posted_date, reading_time, author_name, hashtags } = blog;
    return (
        <div className="mb-20 border border-gray-300 p-7 rounded-2xl">
            <img className="w-full h-125 mb-8 rounded-xl" src={cover_img} alt="" />
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-5 items-center ">
                    <img className="w-18 h-18 rounded-full object-cover" src={author_img} alt="" />
                    <div>
                        <h3 className="font-bold text-2xl">{author_name}</h3>
                        <p className="font-medium text-gray-500">{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddByBookmarks(blog)} className="cursor-pointer"><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="mb-5">
                {
                    hashtags.map((hash, idx) => <span key={idx} className="mr-2 text-gray-500"><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(id, reading_time)} className="text-purple-500 underline font-bold cursor-pointer">Mark as read</button>
        </div>
    );
};

export default Blog;