import '../Style/Gallery.css'
import { useState, useEffect } from "react";
import { GetData } from '../service/api';

export default function Gallery() {

     const [images, setImages] = useState({
    gallery: [],
    installations: null,
    nativePlant: null,
    customConcepts: null,
});


useEffect(() => {
    Promise.all([
        GetData("flower bouquet", 9),
        GetData("florist arranging flowers", 1),
        GetData("native plants arrangement", 1),
        GetData("custom bouquet tulips", 1),
    ]).then(([galleryData, install, native, custom]) => {
        setImages({
            gallery: galleryData?.photos || [],
            installations: install?.photos?.[0]?.src.medium || null,
            nativePlant: native?.photos?.[0]?.src.medium || null,
            customConcepts: custom?.photos?.[0]?.src.medium || null,
        });
    });
}, []);
    return(
        <>
            <div className="gallery_container">
                <h1 className="gallery_header">Gallery</h1>

                <div className="gallery_img">
                    {images.gallery.map((photo) => (
                    <div className="gallery_item" key={photo.id}>
                        <img src={photo.src.medium} alt={photo.alt || "flower"} />
                    </div>
                ))}                                                                
                </div>

                <div className="gallery-secs">
                    <div className="gallery_sec1">
                        <img src={images.installations} />
                        <h2>FLORAL INSTALLATIONS</h2>
                        <p>We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.</p>
                    </div>

                    <div className="gallery_sec1">
                        <img src={images.nativePlant} />
                        <h2>NATIVE PLANT ARRANGEMENTS</h2>
                        <p>
                            Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.
                        </p>
                    </div>

                    <div className="gallery_sec1">
                        <img src={images.customConcepts} />
                        <h2>CUSTOM FLORAL CONCEPTS</h2>
                        <p>Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.</p>
                    </div>

                </div>

                <div className="galleery_conclusion">
                    <p>
                        Discover how we can add a touch of natural beauty to your next event. 
                    </p>
                </div>
            </div>
        </>
    )
}