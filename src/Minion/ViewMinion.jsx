import { useEffect, useState } from 'react'
import { getMinion } from '../services/MinionServices';

function Minion() {
  const [minion, setMinion] = useState({});
  const [id, setId] = useState("");
  function handleData(e){
    setId(e.target.value);
}
  useEffect(() => {
    getMinion(id).then((response) => {
        setMinion(response.data);
    });
  }, [id]);
  
  return (
    <>
    <div>
        <h3>{id}</h3>
        <input type="text" name="name" onChange={handleData} />
    </div>
    <div key={minion._id} className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{minion.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{minion.category}</h6>
          <p className="card-text">Bio:{minion.bio}</p>

        </div>
      </div>
    </>
  )
}

export default Minion;
