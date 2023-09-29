import { useState, useEffect } from "react";

const useFetch=(url)=>{
    const [isPending, setisPending] = useState(true);
    const [data, setData]=useState(null);
    const [error, setError] = useState(null);
    useEffect(()=>{

        const abortCont = new AbortController();

        // console.log('Redered')
        // let Timer = setTimeout(()=>{
        //     setCount((count)=>count+1);
        // },1000);
        // return ()=> clearTimeout(Timer);
        setTimeout(()=>{
            fetch(url)
        .then(res=>{
            if(!res.ok){
                throw  Error('Could not find search');
            }
            return res.json();
        }).then(data=>{
            setData(data);
            setisPending(false);
            setError(null);
        }).catch((e)=>{
            if(e.name==='AbortError'){
                console.log('fetch aborted')
            }else{
                setError(e.message);
                setisPending(false);
            }
            
        })
        },1000);

        return ()=>abortCont.abort();
    },[url])

    return {data, isPending, error}
}

export default useFetch;