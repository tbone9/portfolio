import React from 'react';
import './style.css';
import alyeska from '../About/Alyeska.jpg';
import race from '../About/race.jpg';
import headshot from '../About/headshot.jpg';

function About() {
    return (
        <React.Fragment>
            <div className='aboutContainer'>
                <div className='contentContainer'>
                    <h2>Bio</h2>
                    <img id='headshot' src={headshot} alt='Headshot of Tyler'></img>
                    <p>I am a web developer who gets excited about diving into the logic of applications to create useful and efficient experiences.</p>

                    <p>In another life I was a professional ski racer and member of the US Paralympic Alpine Ski Team. For 15 years I traveled the ski world, representing my country at the highest levels of competition. I learned how to maintain peak performance and accomplish complex, long-term goals through mental and physical training, as well as extensive technological research. <img id='racing' src={race} alt="Tyler in the middle of a turn in a giant slalom race"></img>After four Paralympics with two silver medals in the 2018 PyeongChang games, one overall World Cup title, and three gold medals in the Winter X-Games, I decided to move on. </p>
                    <br></br>
                    <p>Since retiring from competition I have focused on developing a set of valuable skills; I found web development to be the perfect combination of technology and creativity. I love to create applications that solve problems and are intuitive to use.
                    </p><img id='alyeska' src={alyeska} alt="Tyler at the top of Alyeska Resort in Alaska"></img><br></br>

                    <p>In my spare time I'm out kayaking, fishing, and trying to find an efficient method to hike on my hands. Pro-tip: if you have legs, use them.</p><br></br>

                    <p>I am currently looking for developer opportunities in the Denver, Colorado area, but I am willing to work remote or relocate. Contact me if you are interested in working together!</p>
                    <br></br>
                </div>

            </div>

        </React.Fragment>
    )
}

export default About;