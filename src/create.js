import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mikey');
    const [isPending, setisPending]= useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const site = {title, body, author};
        setisPending(true)
        // console.log(site)
        fetch('http://localhost:8000/Sites',{
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(site)
        }).then(()=>{
            setisPending(false);
            history.push('/');
        });

    }

    return ( 
        <div className="create">
            <h2>Add New Site</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>{setBody(e.target.value)}}
                ></textarea>
                <label>Blog Author:</label>
                <select 
                value={author}
                onChange={(e)=>{setAuthor(e.target.value)}}
                >
                    <option value="Mikey">Mikey</option>
                    <option value="Yashi">Yashi</option>
                    <option value="Other">Other</option>
                    <option value="Jin Mori">Jinmori</option>
                </select>
                {!isPending && <button>Add Site</button>}
                {isPending && <button disabled>Adding site...</button>}
                
            </form>
        </div>
     );
}
 
export default Create;