import { useEffect, useState } from 'react'
import { deleteMinion, getMinion, getMinions } from '../services/MinionServices';

function Discs() {
  const [minions, setMinions] = useState([]);
  const [minion, setMinion] = useState(null);
  useEffect(() => {
    getMinions().then((response) => {
        setMinions(response.data);
      //  console.log(response.data);
      //  console.log(minions)
    });
    
  }, []);
  
  const deleteMinion = (e) => {
    let id=e.target.id;
    deleteMinion(id).then(() => {
        setMinions(minions.filter((minion)=> minion._id !== id))
    });
  }

  return (
    <>
      {minions.map(element => {
        return(
        <div key={element._id} className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{element.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{element.category}</h6>
          <p className="card-text">Bio:{element.bio}</p>
          <button type="button" className="btn btn-primary" id={element._id} onClick={deleteMinion}>Delete</button>

        </div>
      </div>

        )
      })}
    </>
  )
}

export default Discs;