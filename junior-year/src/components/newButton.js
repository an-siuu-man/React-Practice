import './NewButton.css'
import { Link } from 'react-router-dom';
const NewButton = (props) => {

    return (
        <Link to={props.link} className='new-button' >
           {props.text}
        </Link>
    )
}

export default NewButton;