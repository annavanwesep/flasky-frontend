import './Animal.css';
// The responsibility of this component is to be a reusable UI element that displays an Animal's
// - name
// - species
// - photo (optional?) -- or a default!
const Animal = (props) => {

    return (
    <section className="Animal">
        <h3>Name: {props.name} </h3>
        <p>Species: {props.species}</p>
        <img src={props.photo} alt="Beijinho"></img> : "[No Photo]"
    </section>);
};



export default Animal;