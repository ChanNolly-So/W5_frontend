import "./Card.css";

export default function Card({ name, class: personClass, interests, imageUrl }) {
  return (
    <div className="card">
      <img 
        src={imageUrl} 
        alt={name} 
        className="card-image"
      />
      <div className="card-text">
        <h3 className="card-name">{name}</h3>
        <p className="card-class">{personClass}</p>
        <p className="card-interests">{interests}</p>
      </div>
    </div>
  );
}