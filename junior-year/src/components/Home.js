import './Home.css';
import { useState } from 'react';
import linkicon from './link.png';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import NewButton from './newButton';
import Section from './Section';
const Home = () => {

    const [content, setContent] = useState(`At the Beacon of Hope Foundation, we're striving to enhance human life, and we need your help to make it happen!
         Our mission is to empower KU students like you to get involved in life-saving initiatives through volunteering and education...`);
    const [readMore, setReadMore] = useState(false);

    const handleReadMore = () => {
        if (readMore) {
            setContent(`At the Beacon of Hope Foundation, we're striving to enhance human life, and we need your help to make it happen!
                 Our mission is to empower KU students like you to get involved in life-saving initiatives through volunteering and education...`);
            setReadMore(false);
        } else {
            setContent(`At the Beacon of Hope Foundation, we're striving to enhance human life, and we need your help to make it happen! 
            Our mission is to empower KU students like you to get involved in life-saving initiatives through volunteering and education. 
            By partnering with organizations like LMHHealth and 'Gift of Life,' we're working to impact lives and raise awareness about critical healthcare issues. 
            Joining our club means you'll have the opportunity to engage directly with healthcare professionals, participate in impactful service projects, and contribute to campaigns that aim to cure blood cancer. 
            Whether you're interested in volunteering, fundraising, or simply spreading the word, there's a place for you in our community. 
            We believe in a future where hope prevails and lives are transformed. 
            As a Beacon of Hope member, you'll be at the heart of a movement where compassion meets action and every effort counts towards a brighter tomorrow. 
            Come be a part of something bigger- together, we can make a real difference. 
            Join us and help us turn hope into action!`);
            setReadMore(true);
        }
    }
    const handleArrowRightClick = () => {
        const sectionsDiv = document.querySelector('.sections');
        sectionsDiv.scrollBy({
            left: 400,
            behavior: 'smooth'
        });
    }
    const handleArrowLeftClick = () => {
        const sectionsDiv = document.querySelector('.sections');
        sectionsDiv.scrollBy({
            left: -400,
            behavior: 'smooth'
        });
    }

    return (
        <div className='home'>  
            <div className='sections-carousel'>
                <svg width="50px" height="50px" className="arrow-left" viewBox="0 0 24 24" fill="none" onClick={handleArrowLeftClick} xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 9L8 12M8 12L11 15M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <div className='sections'>
                    <Section title='Welcome!' image={image1} content='We are a student organization at the University of Kansas dedicated to making a difference in healthcare.'/>
                    <Section title="Our Mission" image={image2} content="Our mission is to empower KU students like you to get involved in life-saving initiatives through volunteering and education."/>
                    <Section title='Get Involved' image={image1} content='Join us and help us turn hope into action!'/>
                    <Section title='Upcoming Events' image={image2} content='Stay tuned for upcoming events!'/>

                </div>
                <svg width="50px" height="50px" className='arrow-right'viewBox="0 0 24 24" fill="none" onClick={handleArrowRightClick} xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 15L16 12M16 12L13 9M16 12H8M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <div className='button-container'>
                <NewButton text='JOIN US' link='/join'/>
                <NewButton text='SIGN UP FOR OUR MAILING LIST' link='/newsletterform'/>
            </div>
            <div className={`about-us`}>
                <h1 className='about-us-title'>More About Us</h1>
                <p className="description">
                {content}
                    <button onClick={handleReadMore} className="read-more">{readMore ? 'Read Less' : 'Read More'}</button>
                </p>
            </div>
            <h2 className="rcc-link">
                    Also find us on: 
                    <a href='https://rockchalkcentral.ku.edu/organization/beaconofhopefoundation' target='_blank' rel='noopener noreferrer'>
                        Rock Chalk Central
                        <img height='24' width='24'className="link-icon" src={linkicon} alt="external-link"/>
                    </a>
            </h2>
        </div>
    );
}

export default Home;