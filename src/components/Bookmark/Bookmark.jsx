const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="bg-white rounded-xl my-4 p-4">
            <h3 className="text-xl font-bold">{title}</h3>
        </div>
    );
};

export default Bookmark;