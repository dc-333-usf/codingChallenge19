import React, {useState} from 'react';
import Gallery from './components/Gallery';

function App() { //this is the main App component, it will hold the state for the tours and pass it down to the Gallery component
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours((prevTours) => (prevTours.filter((tour) => tour.id !== id)));
    };

    return (
    <main>
    <h1>Our Tours</h1>
    <Gallery tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
    ); //this is the main function that will render the App component, it will return the main element with a header and the Gallery component. The Gallery component will take in the tours state and the setTours function as props, as well as the removeTour function to remove a tour from the list.
}

export default App;