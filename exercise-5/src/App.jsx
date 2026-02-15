// src/App.jsx
import { people } from './data';
import Card from './components/Card';
import './App.css'; 

function App() {
  return (
    <div className="app">
      
      <div className="cards-container">
        {people.map((person) => (
          <Card
            key={person.id}
            name={person.name}
            class={person.class}
            interests={person.interests}
            imageUrl={person.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;