import './Home.css';
import { useState } from 'react';
import linkicon from './link.png';
import NewButton from './newButton';

const Home = () => {

    const [content, setContent] = useState("At the Beacon of Hope Foundation, we're dedicated to making a difference in healthcare, and we need your help to make it happen! Our mission is to empower KU students like you to get involved in life-saving initiatives through volunteering and education...");
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        if (readMore) {
            setContent("At the Beacon of Hope Foundation, we're dedicated to making a difference in healthcare, and we need your help to make it happen! Our mission is to empower KU students like you to get involved in life-saving initiatives through volunteering and education...");
            setReadMore(false);
        } else {
            setContent("At the Beacon of Hope Foundation, we're dedicated to making a difference in healthcare, and we need your help to make it happen! Our mission is to empower KU students like you to get involved in life-saving initiatives through volunteering and education. By partnering with organizations like LMHHealth and 'Gift of Life,' we're working to impact lives and raise awareness about critical healthcare issues. Joining our club means you'll have the opportunity to engage directly with healthcare professionals, participate in impactful service projects, and contribute to campaigns that aim to cure blood cancer. Whether you're interested in volunteering, fundraising, or simply spreading the word, there's a place for you in our community. We believe in a future where hope prevails and lives are transformed. As a Beacon of Hope member, you'll be at the heart of a movement where compassion meets action and every effort counts towards a brighter tomorrow. Come be a part of something bigger—together, we can make a real difference. Join us and help us turn hope into action!");
            setReadMore(true);
        }
    }

    return (
        <div className='home'>
            <div className={`about-us`}>
                <h2 className="title">
                    Also find us on: 
                    <a href='https://rockchalkcentral.ku.edu/organization/beaconofhopefoundation' target='_blank' rel='noopener noreferrer'>
                        Rock Chalk Central
                        <img height='24' width='24'className="link-icon" src={linkicon} alt="external-link"/>
                    </a>
                </h2>
                <p className="description">
                {content}
                    <button onClick={handleReadMore} className="read-more">{readMore ? 'Read Less' : 'Read More'}</button>
                </p>
            </div>
            
            <div className='button-container'>
                <NewButton text='JOIN US' link='/join'/>
                <NewButton text='SIGN UP FOR OUR NEWSLETTER' link='/newsletterform'/>
            </div>
        </div>
    );
}

export default Home;