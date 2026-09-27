import '../Style/About.css';
import  F1 from '../assets/F1.png'
import  F2 from '../assets/F2.png'
import  F3 from '../assets/F3.png'
import  F4 from '../assets/F4.png'

export default function About(){
 
    return(
        <>
        <div className="about_page">
            <div className="about_top">
                <h1 className="header">ABOUT</h1>
                <div className="about_credit">
                    <p className="about_credit_name">LILY SMITH</p>
                    <p className="about_credit_role">Founder</p>
                </div>
            </div>
 
            <div className="about_intro">
                <img src={F1} className="about_img_intro" />
                <p className="about_p">
                    Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth.
                </p>
            </div>
 
            <div className="about_gallery">
                <img className="about_img" src={F2} />
                <img className="about_img" src={F3} />
                <img className="about_img" src={F4} />
            </div>
 
            <div className="about_content">
                <p className="about_text">
                    Lily’s journey with flowers began in the heart of Oregon,
                    amidst the flourishing fields of her aunts' flower farm.
                    It was there, surrounded by the abundance of nature,
                    that she discovered her passion for floral design.
                    From learning the names of each bloom to understanding the delicate balance of a bouquet,
                    she absorbed the artistry of flowers like the rich Oregon soil.
                    Bloom & Co. is the expression of that lifelong passion,
                    a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.
                </p>
 
                <div className="about_feature_img_wrap">
                    <img className="about_feature_img" src={F1} />
                </div>
 
                <p className="about_text">
                    From humble beginnings, Bloom&Co has grown into a beloved local destination,
                    known for its artistic arrangements, personal service, and commitment to quality.
                    Discover how we can add a touch of natural beauty to your next event.
                </p>
            </div>
        </div>
        </>
    )
}