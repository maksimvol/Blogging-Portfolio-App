import '../styles/About.css'
import instagramLogo from '../images/instagram.png'
import tsiLogo from '../images/tsi.png'
import photo from '../images/photo.jpg'
import black_mockup from '../images/black_mockup.png'
import black from '../images/black.png'
import white_mockup from '../images/white_mockup.png'
import white from '../images/white.png'
import bag from '../images/bag.png'
import boat from '../images/boat.jpg'
import ferry from '../images/ferry.jpg'
import lake_como from '../images/lake_como.jpg'
import milan from '../images/milan.jpg'
import porsche from '../images/porsche.jpg'
import town from '../images/town.jpg'
import villa from '../images/villa.jpg'

const About = () => {
    return (
        <div>
            <h1>Maksim's Portfolio</h1>
            <div className="profile-section">
                <div className="profile-photo">
                    <img src={photo} alt="Maksim's Photo" />
                </div>
                <div className="profile-details">
                    <h2>Personal Details</h2>
                    <p><strong>Name: </strong> Maksims Volokotkins</p>
                    <p>
                        <strong>Instagram: </strong>
                        <a href="https://www.instagram.com/massyavv" target="_blank" rel="noopener noreferrer">
                            <img src={instagramLogo} alt="Instagram" style={{ height: '20px', verticalAlign: 'middle', margin: '5px' }} />
                        </a>
                    </p>
                    <p><strong>Study Place: </strong> TSI
                        <a href="https://tsi.lv/" target="_blank" rel="noopener noreferrer">
                            <img src={tsiLogo} alt="TSI" style={{ height: '20px', verticalAlign: 'middle', margin: '5px' }} />
                        </a>
                    </p>
                    <p><strong>Birth Date: </strong> May 24, 2003</p>
                </div>
            </div>

           <div className="section">
                <h2>Hobbies</h2>
                <ul>
                    <li className='section'>
                        Sewing
                            <li>
                                <p>Black Handmade Sweatpants</p>
                                <div className="list-images">
                                    <img src={black_mockup} alt="black handmade sweatpants mockup" />
                                    <img src={black} alt="black handmade sweatpants" />
                                </div>
                            </li>
                            <li>
                                <p>White Handmade Sweatpants</p>
                                <div className="list-images">
                                    <img src={white_mockup} alt="white handmade sweatpants mockup" />
                                    <img src={white} alt="white handmade sweatpants" />
                                </div>
                            </li>
                            <li>
                                <p>Denim Bag</p>
                                <div className="list-images">
                                    <img src={bag} alt="handmade bag from old jeans" />
                                </div>
                            </li>
                    </li>
                        <li className='section'>
                            Travelling
                        <li>
                            <p>Italy - Lake Como (August 2024)</p>
                            <i>Pictures taken with film camera</i>
                                <div className="list-images">
                                    <img src={boat} alt="boat" />
                                    <img src={ferry} alt="ferry" />
                                    <img src={lake_como} alt="lake como" />
                                    <img src={milan} alt="milan" />
                                    <img src={porsche} alt="porsche" />
                                    <img src={town} alt="town" />
                                    <img src={villa} alt="villa" />
                                </div>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;