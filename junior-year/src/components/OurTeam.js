import OfficerDetails from "./OfficerDetails";
import './OurTeam.css';
import image from './ansuman-pic.png';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

const OurTeam = () => {
    const officers = [
        {
            name: 'Aarush Sehgal',
            position: 'President',
            email: 'a417s034@ku.edu',
            phone: 7894561230,
            bio: 'Aarush is a senior at the University of Kansas pursuing Molecular, Cellular & Developmental Biology. He is passionate about helping others. In his free time, Aarush enjoys playing the guitar and reading.',
            photo: image1,
            id: 1
        },
        {
            name: 'Ansuman Sharma',
            position: 'Vice President',
            email: 'ansuman@ku.edu',
            phone: 7894561230,
            bio: 'Ansuman is a junior at the University of Kansas studying Computer Science. He is passionate about using technology to solve real-world problems. In his free time, Ansuman enjoys playing soccer and doing calligraphy.',
            photo: image,
            id: 2
        },
        {
            name: 'Tithi Patel',
            position: 'Treasurer',
            email: 'tithipatel09@ku.edu',
            phone: 7894561230,
            bio: 'Tithi is a junior at the University of Kansas studying Finance and Accounting. She is passionate about helping others. In her free time, Tithi enjoys reading and cooking.',
            photo: image2,
            id: 3
        },
        {
            name: 'Dr. Dyan Morgan',
            position: 'Faculty Advisor',
            email: 'dyan.morgan@ku.edu',
            bio: 'Dr. Morgan is an Associate Teaching Professor at KU and faculty advisor for the Beacon of Hope Foundation. She is passionate about helping students get involved in the community. In her free time, Dyan enjoys hiking and painting.',
            photo: image3,
            id: 4
        }
    ];
    return (
        <div className='our-team-container'>
            <h1 className='our-team-title'>Meet our team!</h1>
            <div className='our-team'>            
                {officers.map((officer) =>
                (
                    <OfficerDetails officer={officer} key={officer.id}/>
                    ))}
            </div>
        </div>
    );
}
 
export default OurTeam;