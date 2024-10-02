import React from 'react';
import Header from '../components/Head';
import prasam from '../assets/Prasam.png';
import sowmya from '../assets/Sowmya.png';
import ayushi from '../assets/Ayushi.jpg';
// import vaibhav from '../assets/Vaibhav.png';
import sriram from '../assets/Sriram.png';
import user from '../assets/user.jpg';

// import './aboutus.css'; 

const teamMembers = [
    {
        name: 'Prasam Jain',
        photo: prasam,
        role: 'Management Trainee',
        Location: 'D4-CMIT, Noida',
    },
    {
        name: 'Ayushi Chaudhary',
        photo: ayushi,
        Location: 'Phase V, Gurgaon',
    },
    {
        name: 'Vaibhav Gupta',
        photo: user,
        Location: 'Phase V, Gurgaon',
    },
    {
        name: 'Sowmya Saini',
        photo: sowmya,
        Location: 'Uppal, Hyderabad',
    },
    {
        name: 'Sriram K',
        photo: sriram,
        Location: 'Uppal, Hyderabad',
    },
];

export default function AboutUs() {
    return (
        <div>
            <Header />
            <div className="about-us">
                <h1>Meet the Team</h1>
                <div className="team-container">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <img src={member.photo} alt={`${member.name}`} className="member-photo" />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            <p>{member.Location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
