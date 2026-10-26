import "./Gallery.css";
import { Link } from "react-router-dom";
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

const Gallery = () => {
    return (
        <div id="gallery-page" className="page">
            <PageTitle
                title="Cookie Gallery"
                text="Take a look at some of our favorite sweet creations. From birthdays and weddings to holidays and special events, every cookie is made just for you."
            />

            <Slideshow slides={slides} />

            <section id="gallery">
                <div id="cookie-list">
                    <GalleryCard
                        image="images/birthdaycookies.jpg"
                        name="Birthday Cookies"
                        category="Birthdays"
                        description="Bright, colorful cookies with names, ages, and party themes."
                        price="$36 per dozen"
                        minOrder={12}
                    />
                    <GalleryCard
                        image="images/schoolcookies.jpg"
                        name="School Cookies"
                        category="School Events"
                        description="Cookies for teachers, graduations, and the first day of school."
                        price="$32 per dozen"
                        minOrder={24}
                    />
                    <GalleryCard
                        image="images/holidaycookies.jpg"
                        name="Holiday Cookies"
                        category="Holidays"
                        description="Seasonal designs for Christmas, Halloween, Easter, and more."
                        price="$34 per dozen"
                        minOrder={12}
                    />
                    <GalleryCard
                        image="images/weddingengagement.jpg"
                        name="Wedding & Engagement"
                        category="Weddings"
                        description="Elegant sets with the couple's names, wedding date, and colors."
                        price="$42 per dozen"
                        minOrder={24}
                    />
                    <GalleryCard
                        image="images/babycookies.jpg"
                        name="Baby Cookies"
                        category="Baby Showers"
                        description="Soft colors and sweet designs for gender reveals and baby showers."
                        price="$38 per dozen"
                        minOrder={12}
                    />
                    <GalleryCard
                        image="images/customsets.jpg"
                        name="Custom Sets"
                        category="Any Occasion"
                        description="Tell us your idea and we will design a set made just for you."
                        price="$40 per dozen"
                        minOrder={12}
                    />
                    <GalleryCard
                        image="images/brandedcookies.jpg"
                        name="Branded Cookies"
                        category="Business"
                        description="Cookies with your logo for openings, clients, and company events."
                        price="$45 per dozen"
                        minOrder={36}
                    />
                    <GalleryCard
                        image="images/partyfavorcookies.jpg"
                        name="Party Favor Cookies"
                        category="Party Favors"
                        description="Individually wrapped cookies that guests can take home."
                        price="$3.50 each"
                        minOrder={24}
                    />
                    <GalleryCard
                        image="images/cookiekits.jpg"
                        name="Cookie Kits"
                        category="Decorate at Home"
                        description="Plain cookies, icing, and sprinkles so you can decorate your own."
                        price="$28 per kit"
                        minOrder={1}
                    />
                </div>

                <p className="center">
                    <Link to="/options" className="button">View More</Link>
                </p>
            </section>
        </div>
    )
};

export default Gallery;
