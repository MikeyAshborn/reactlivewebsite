import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const SiteDetails = () => {
    const { id } = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/Sites/'+ id);
    const history = useHistory();
    const handleClick=()=>{
        fetch('http://localhost:8000/Sites/'+blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }

    return (
        <div className="site-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && 
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By { blog.author }</p>
                    <div>{blog.body}</div>
                </article>}
                <button onClick={handleClick}>Delete Site</button>
        </div>
    );
}
 
export default SiteDetails;