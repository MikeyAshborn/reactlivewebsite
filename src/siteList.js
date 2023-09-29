import { Link } from "react-router-dom/cjs/react-router-dom.min";

const SiteList = ({blogs, title}) => {
    
    return (
        <div className="weblist">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <Link to={`/SiteDetails/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                </Link>
                
                {/* <button onClick={()=>{delClick(blog.id)}}>Delete Site</button> */}
            </div>
            ))}
        </div>
    );
}
 
export default SiteList;