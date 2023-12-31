import './App.css'
import "./minions.css"
const minions = [
  {
    name: "Kevin",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/kevin.jpg",
    birth: "1951",
    side:"de los buenos"
  },
  {
    name: "Josua",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/Josua.jpg",
    birth: "1672",
    side:"malvado"
  },
  {
    name: "Dave",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/dave.jpg",
    birth: "1723",
    side: "de los buenos"
  },
  {
    name: "Mudito",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/mudito.jpeg",
    birth: "1379",
    side:"de los buenos"
  },
  {
    name: "Llongueras",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/llongueras.jpg",
    birth: "1687",
    side: "malvado"
  },
  {
    name: "Minioncé",
    bio: "Le va el cante, dar la nota, ama los karaokes, es el rey y reina de la fiesta. Invítalo a tu fiesta o te arrepentirás.",
    img: "assets/img/minionce.jpg",
    birth: "1976",
    side: "de los buenos"
  },
  {
    name: "Lobeznion",
    bio: "No lo enfades, este bichillo tiene muy malas pulgas...aunque sólo mide medio metro y ¡no puede ser más gracioso!",
    img: "assets/img/lobeznion.jpg",
    birth: "2017",
    side: "malvado"
  },
  {
    name: "Minion Presley",
    bio: "Aquí debería haber una biografía de la vida de este minion, pero son gente muy misteriosa, así que tendrás que imaginártela...",
    img: "assets/img/minion-presley.jpg",
    birth: "2017",
    side: "malvado"
  }];


function MinionCard({name,bio,img,birth,side}){
  return (
    <>
      <div className="card">
          <img src={img}></img>
          <div className="card-body">
            <h5 className="card-text">Name: {name}</h5>
            <p className="card-text">Bio: {bio}</p>
            <p className="card-text">Birth: {birth}</p>
            <p className="card-text">Side: {side}</p>
          </div>
      </div>
    </>
  )
}

function MinionsList() {
  let cards = [];

  minions.forEach(minion => {
    cards.push(<MinionCard key={minion.name} name={minion.name} bio={minion.bio} img={minion.img} birth={minion.birth} side={minion.side}></MinionCard>)
  })
  return(
    <div className="containerr">
      {cards}
    </div>

  )
}

export default MinionsList