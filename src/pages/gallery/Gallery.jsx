import "./Gallery.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PageTitle from "../../components/page-title/PageTitle";
import Slideshow from "../../components/slideshow/Slideshow";
import GalleryCard from "../../components/gallery-card/GalleryCard";

//my server on render, the gallery cookies and their images come from here
const SERVER = "https://cookies-server-ut6u.onrender.com";

const slides = [
    { image: "images/birthdaycookies.jpg", alt: "Birthday Cookies" },
    { image: "images/weddingengagement.jpg", alt: "Wedding and Engagement Cookies" },
    { image: "images/holidaycookies.jpg", alt: "Holiday Cookies" },
    { image: "images/babycookies.jpg", alt: "Baby Cookies" },
    { image: "images/customsets.jpg", alt: "Custom Cookie Sets" }
];

const Gallery = () => {
    //-1 means the lightbox is closed, otherwise it's the picture being shown
    const [photoIndex, setPhotoIndex] = useState(-1);
    const [cookies, setCookies] = useState([]);
    const [status, setStatus] = useState("loading");

    //after the page loads, get the cookies from the server
    useEffect(() => {
        const loadCookies = async () => {
            try {
                const response = await axios.get(`${SERVER}/api/cookies`);
                setCookies(response.data);
                setStatus("done");
            } catch (error) {
                setStatus("error");
            }
        };

        loadCookies();
    }, []);

    const lightboxSlides = cookies.map((cookie) => ({
        src: `${SERVER}/images/${cookie.main_image}`,
        alt: cookie.name
    }));

    return (
        <div id="gallery-page" className="page">
            <PageTitle
                title="Cookie Gallery"
                text="Take a look at some of our favorite sweet creations. From birthdays and weddings to holidays and special events, every cookie is made just for you."
            />

            <Slideshow slides={slides} />

            <section id="gallery">
                <p className="center">Click any cookie picture to see it larger.</p>

                {status === "loading" ? (
                    <p className="center gallery-status">Loading cookies from the server...</p>
                ) : null}
                {status === "error" ? (
                    <p className="center gallery-status">Sorry, the cookies couldn't load right now. Please try again in a minute.</p>
                ) : null}

                <div id="cookie-list">
                    {cookies.map((cookie, index) => (
                        <GalleryCard
                            key={cookie._id}
                            image={`${SERVER}/images/${cookie.main_image}`}
                            name={cookie.name}
                            category={cookie.category}
                            description={cookie.description}
                            price={cookie.price}
                            minOrder={cookie.min_order}
                            onImageClick={() => setPhotoIndex(index)}
                        />
                    ))}
                </div>

                <Lightbox
                    open={photoIndex >= 0}
                    index={photoIndex}
                    close={() => setPhotoIndex(-1)}
                    slides={lightboxSlides}
                />

                <p className="center">
                    <Link to="/options" className="button">View More</Link>
                </p>
            </section>
        </div>
    )
};

export default Gallery;
