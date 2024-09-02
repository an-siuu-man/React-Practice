import './Section.css';

const Section = (props) => {
    return (
        <div className="section">
            <h2 className="section-header">{props.title}</h2>
            <div className="section-info">
                <p className="section-content">
                    {props.content}
                </p>
                <div className="section-image">
                    <img src={props.image} alt={props.title} height='200px' width='200px'/>
                </div>
            </div>
        </div>
    );
}
 
export default Section;