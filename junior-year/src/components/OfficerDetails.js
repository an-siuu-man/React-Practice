import './OfficerDetails.css';
import { useState } from 'react';



const OfficerDetails = ({ officer }) => {

    const [showBio, setShowBio] = useState(false);
    const handleShowBio = () => {
        setShowBio(!showBio);
    }
    return (
        <div onClick={handleShowBio} className={showBio ? 'officer-details-focus' : 'officer-details'}>
            <img src={officer.photo} alt={officer.name} height='180px' width='180px'/>
            <h2>{officer.name}</h2>
            <table>
                <tbody>
                    <tr>
                        <td><b>Position:</b></td>
                        <td>{officer.position}</td>
                    </tr>
                    <tr>
                        <td><b>Email:</b></td>
                        <td>{officer.email}</td>
                    </tr>
                    <tr>
                        <td> <b>{officer.phone && 'Phone:'}</b></td>
                        <td>{officer.phone}</td>
                    </tr>
                    <tr>
                        <td><b>{showBio && 'Bio:'}</b></td>
                        <td>{showBio && officer.bio}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default OfficerDetails;