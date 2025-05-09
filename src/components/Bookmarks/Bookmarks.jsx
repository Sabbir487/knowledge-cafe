import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 ">
            <div className="bg-purple-200 border border-purple-500 rounded-xl p-5 mb-6">
                <h2 className="text-3xl text-purple-600 font-bold text-center">Spent time on read: {readingTime}</h2>
            </div>
            <div className="bg-gray-100 rounded-xl p-7">
                <h2 className="text-3xl font-bold pt-3">Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;