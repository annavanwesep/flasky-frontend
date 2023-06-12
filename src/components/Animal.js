// The responsibility of this component is to be a reusable UI element that displays an Animal's
// name
// species
// photo
import './Animal.css';

const Animal = () => {

    return (<section>
        <h3>Animal name: Loki</h3>
        <p>Species: Cat</p>
        <img src="http://placekitten.com/g/200/300" alt="Beijinho"></img>
    </section>);
};

export default Animal;