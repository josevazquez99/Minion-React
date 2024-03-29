import { useEffect, useState } from 'react'
import { createDisc, getDisc } from '../services/MinionServices';

function Add() {
  
  const [disc, setDisc] = useState({ name: null, bio: null, category: null });

  function handleData(e){
    setDisc({...disc,[e.target.name]:e.target.value});
}

    function addSave(){
        createDisc(disc).then(() => {
          });
    }
  return (
    <>          
                <div>
                    <label htmlFor="name">
                        name:<br />
                        <input type="text" name="name" onChange={handleData} />
                    </label>
                </div>
                <div>
                    <label htmlFor="bio">
                    bio:<br />
                        <input type="text" name="bio" onChange={handleData} />
                    </label>
                </div>
                <div>
                    <label htmlFor="category">
                    category:<br />
                        <input type="text" name="category" onChange={handleData} />
                    </label>
                </div>
                
                <br />
                <div>
                    <button type="submit" onClick={addSave}>Save</button>
                </div>
               
    </>
  )
}

export default Add;