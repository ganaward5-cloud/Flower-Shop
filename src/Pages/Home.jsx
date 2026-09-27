import { Link } from 'react-router-dom';
import  flower_header from'../assets/flower_header.jpg';
import '../Style/Home.css';
import  F1 from '../assets/F1.png'
import  F2 from '../assets/F2.png'
import  F3 from '../assets/F3.png'
import  F4 from '../assets/F4.png'

export default function Home () {

    
    return(
        <>
        <div className='home-container'>

            <div className='home-head'>
               <h1 className="header">Our Blooms® </h1> 
               <img src={flower_header} alt="Flower-Picture"/>
            </div>

            <div className='head-intro'>
                <p className='home-head1'>Who We Are</p>

                <p className='home-par'>
                    We're Our Blooms® and we're here to help you find your floral story.
                </p>
                <Link to="/about" > . About us</Link>
            </div>

            <div className='home-sec'>
                <div>
                    <h2>1</h2>
                    <img src={F1} alt="Flower-Picture"/>
                    <p>FLORAL INSTALLATIONS</p>
                    <p>Living art for homes, businesses, and events.</p>
                    
                </div>

                <div>
                    <h2>2</h2>
                    <img src={F2} alt="Flower-Picture"/>
                    <p>NATIVE PLANT ARRANGEMENTS</p>
                    <p>Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
                </div>

                <div>
                    <h2>3</h2>
                    <img src={F3} alt="Flower-Picture"/>
                    <p>CUSTOM FLORAL CONCEPTS</p>
                    <p>Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
                </div>

                <div className='home-end'>
                    <img src={F4} alt="Flower-Picture"/>
                    <p>Discover how we can add a touch of natural beauty to your next event.</p>
                    <Link to="/about" > . About us</Link>
                </div>
            </div>
            
        </div>
        
        </>
    )
}
