
import './App.css'

function Card({ user, designation, img }) {

    
return (
    <div className="card-div">
      <img src={img} alt={`${user}`} />
      <h2>{user}</h2>
      <h4>{designation}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        quibusdam molestias facilis eveniet necessitatibus vero ullam quas.
      </p>
      <button>About me</button>
    </div>
  );
    
   // console.log("entered in card function");

}
export default Card;