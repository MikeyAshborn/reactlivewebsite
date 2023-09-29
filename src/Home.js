// import {useState, useEffect} from 'react';
import SiteList from './siteList';
import useFetch from './useFetch';



const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/Sites');
    // let name ="Mikey";
    // const [blogs, setBlogs]=useState([
    //     {title : 'New Website1' , body:'Lorem ipsum...' , author: 'Hussain1', id: 1},
    //     {title : 'New Website2' , body:'Lorem ipsum...' , author: 'Hussain2', id: 2},
    //     {title : 'New Website3' , body:'Lorem ipsum...' , author: 'Hussain3', id: 3},
    // ])

// const [name, setName] = useState('Lee');
// const [age, setAge] = useState(22);
// const handleClick=(nam)=>{
//     setName(nam);
//     setAge(21);
// }

// const delClick=id=>{
//         const newSites = blogs.filter(blog=>blog.id!==id);
//         setBlogs(newSites);
// }

// const [Name, setNam]= useState('Pronty');
// const [count, setCount] = useState(0);




// const nameChange=(n)=>{
//     setNam(n);
// }

    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {/* <h1>I have rendered {count} times</h1> */}
            {/* <h2>Home Page</h2>  */}
            {/* <p>{name} is {age} years old </p> */}
            {/* <button onClick={()=>handleClick('Hussain')}>Click me</button>  */}
            {blogs && <SiteList blogs={blogs} title="All Sites"  />}
            {/* {blogs && <SiteList blogs={blogs.filter((blog)=>(blog.author==='Hussain2'))} title="Filtered" delClick={delClick}  />} */}

            {/* <button onClick={()=>{nameChange('Hussain')}}>Change Name</button> */}
            {/* <p>{Name}</p> */}
        </div>
     );
}
 
export default Home;