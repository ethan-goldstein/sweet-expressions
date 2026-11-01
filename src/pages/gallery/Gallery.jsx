import "./Gallery.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PageTitle from "../../components/page-title/PageTitle";
import Slideshow from "../../components/slideshow/Slideshow";
import GalleryCard from "../../components/gallery-card/GalleryCard";

const slides = [
    { image: "images/birthdaycookies.jpg", alt: "Birthday Cookies" },
    { image: "images/weddingengagement.jpg", alt: "Wedding and Engagement Cookies" },
    { image: "images/holidaycookies.jpg", alt: "Holiday Cookies" },
    { image: "images/babycookies.jpg", alt: "Baby Cookies" },
    { image: "images/customsets.jpg", alt: "Custom Cookie Sets" }
];

const cookies = [
    {
        image: "images/birthdaycookies.jpg",
        name: "Birthday Cookies",
        category: "Birthdays",
        description: "Bright, colorful cookies with names, ages, and party themes.",
        price: "$36 per dozen",
        minOrder: 12
    },
    {
        image: "images/schoolcookies.jpg",
        name: "School Cookies",
        category: "School Events",
        description: "Cookies for teachers, graduations, and the first day of school.",
        price: "$32 per dozen",
        minOrder: 24
    },
    {
        image: "images/holidaycookies.jpg",
        name: "Holiday Cookies",
        category: "Holidays",
        description: "Seasonal designs for Christmas, Halloween, Easter, and more.",
        price: "$34 per dozen",
        minOrder: 12
    },
    {
        image: "images/weddingengagement.jpg",
        name: "Wedding & Engagement",
        category: "Weddings",
        description: "Elegant sets with the couple's names, wedding date, and colors.",
        price: "$42 per dozen",
        minOrder: 24
    },
    {
        image: "images/babycookies.jpg",
        name: "Baby Cookies",
        category: "Baby Showers",
        description: "Soft colors and sweet designs for gender reveals and baby showers.",
        price: "$38 per dozen",
        minOrder: 12
    },
    {
        image: "images/customsets.jpg",
        name: "Custom Sets",
        category: "Any Occasion",
        description: "Tell us your idea and we will design a set made just for you.",
        price: "$40 per dozen",
        minOrder: 12
    },
    {
        image: "images/brandedcookies.jpg",
        name: "Branded Cookies",
        category: "Business",
        description: "Cookies with your logo for openings, clients, and company events.",
        price: "$45 per dozen",
        minOrder: 36
    },
    {
        image: "images/partyfavorcookies.jpg",
        name: "Party Favor Cookies",
        category: "Party Favors",
        description: "Individually wrapped cookies that guests can take home.",
        price: "$3.50 each",
        minOrder: 24
    },
    {
        image: "images/cookiekits.jpg",
        name: "Cookie Kits",
        category: "Decorate at Home",
        description: "Plain cookies, icing, and sprinkles so you can decorate your own.",
        price: "$28 per kit",
        minOrder: 1
    }
];

const Gallery = () => {
    //-1 means the lightbox is closed, otherwise it's the picture being shown
    const [photoIndex, setPhotoIndex] = useState(-1);

    const lightboxSlides = cookies.map((cookie) => ({
        src: `${process.env.PUBLIC_URL}/${cookie.image}`,
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

                <div id="cookie-list">
                    {cookies.map((cookie, index) => (
                        <GalleryCard
                            key={cookie.name}
                            image={cookie.image}
                            name={cookie.name}
                            category={cookie.category}
                            description={cookie.description}
                            price={cookie.price}
                            minOrder={cookie.minOrder}
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
