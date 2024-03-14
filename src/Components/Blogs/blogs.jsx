import Blog from "../Blog/blog";
const blogs = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Blog></Blog>
            <Blog></Blog>
            <Blog></Blog>
            <Blog></Blog>
            <Blog></Blog>
            <Blog></Blog>
            
        </div>
    );
};

export default blogs;