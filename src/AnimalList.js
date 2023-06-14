import './AnimalList.css'

import Animal from './Animal';
import PropTypes from 'prop-types';

const AnimalList = ({listOfAnimals}) => {
// If the parameter is props instead, you can do these!
// const listOfAnimals = props.listOfAnimals;
// const {listOfAnimals}

    return (
    <section className="AnimalList">
            <h2>Animal List</h2>
            <ul className='AnimalList__list'>
                {
                    listOfAnimals.map((creature => (
                    <li>
                        <Animal 
                            name={creature.name} 
                            species={creature.species}
                            photo={creature.photo}
                    />
                </li>)
            )  
        }
    </ul>
</section>
    );
};

Animal.propTypes = {
    listOfAnimals: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            species: PropTypes.string,
            adopted: PropTypes.bool,
            age: PropTypes.number, 
            photo: PropTypes.string
        })
};
export default AnimalList;