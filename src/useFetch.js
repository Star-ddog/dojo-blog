// import React from 'react';
import  {useState, useEffect } from 'react';

const useFetch = (url) =>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState (true);
    const [error, setError] = useState(null);
    
    useEffect(() =>{
        const abortcont = new AbortController();

        fetch(url, { signal: abortcont.signal})
        .then(res => {
         if(!res.ok) {
             throw Error('could not fetch the data for the resource');
 
         }
            return res.json();
        })
        .then(data => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
     
        .catch(err => {
          if (err.name === 'AbortError') {
              console.log('fetch aborted');
          }  else{
            setIsPending(false);
            setError(err.message);
          }
           
        })
        return () => abortcont.abort();
    }, );
    return {data, isPending, error}
}

export default useFetch;