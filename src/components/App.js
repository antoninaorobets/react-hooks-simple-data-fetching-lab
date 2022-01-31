import React, {useState, useEffect} from 'react';

function App() {
    const [img,setImage] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(data=> {
            console.log(data.message)
            setImage(data.message)
            setIsLoading(true)
        })

    }, [])
    if (!isLoading) return <p>Loading...</p>;
  return <div>
      <img src={img} alt="A Random Dog"/>
  </div>;
}

export default App;
