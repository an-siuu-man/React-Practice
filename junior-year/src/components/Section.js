import './Section.css';
import ansumanimage from './image1.jpg';

const Section = (props) => {
    return (
        <div className="section">
            <div className="section-info">
                <h1 className="section-header">{props.title}</h1>
                <p className="section-content">
                    {props.content}
                </p>
            </div>
            <div className="section-image">
                <img src={ansumanimage} alt={props.title} height='200px' width='200px'/>
            </div>
        </div>
    );
}
 
export default Section;