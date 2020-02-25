import React from 'react';
import '../About/style.css';
import alyeska from '../About/Alyeska.jpg';
import race from '../About/race.jpg';
import headshot from '../About/headshot.jpg';

const About = () => {
    return (
        <React.Fragment>
            <div className='aboutContainer'>
                <div className='contentContainer'>
                    <h2>A bit about me</h2>
                    
                    <p>I am a web developer that gets excited about diving into the logic of applications to create useful and efficient experiences.</p>
                    <img src={headshot} alt='Headshot of Tyler'></img>
                    <p>In another life I was a professional ski racer and member of the US Paralympic Alpine Ski Team. For 15 years I traveled the ski world, representing my country at the highest levels of competition. I learned how to maintain peak performance and accomplish complex, long-term goals through mental and physical training, as well as extensive technological research. <img src={race} alt="Tyler in the middle of a turn in a giant slalom race"></img>After four Paralympics with two silver medals in the 2018 PyeongChang games, one overall world cup title, and three gold medals in the Winter X-Games, I decided to move on. </p>
                    <img src={alyeska} alt="Tyler at the top of Alyeska Resort in Alaska"></img>
                    <p>After retiring from competition I wanted to focus on developing a set of valuable skills; I found web development to be the perfect combination of technology and creativity. I love to create applications that solve problems and are intuitive to use.
                    </p>
                    <p>I currently live in Denver, Colorado.</p>
                    <br></br>
                </div>
                
            </div>
            
        </React.Fragment>
    )
}

export default About;