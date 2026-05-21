"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Building2 } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Rooms",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Hotel Silk"
      button={{
        text: "Book Now",
        href: "https://www.makemytrip.com",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "radial-gradient",
      }}
      title="Experience Unmatched Luxury at Hotel Silk"
      description="Discover comfort and elegance in the heart of Rajkot. Perfect for your next peaceful getaway, we offer premium amenities to ensure an unforgettable stay."
      leftCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E1T79FDLvD89OAMo7divZiLKNm/uploaded-1779345332564-hgmyq6p6.jpg?_wi=1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/couple-embracing-each-other-while-outdoors-night_23-2149215098.jpg",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E1T79FDLvD89OAMo7divZiLKNm/uploaded-1779345332564-pjht8jl9.jpg",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E1T79FDLvD89OAMo7divZiLKNm/uploaded-1779345332564-53d70tsz.jpg?_wi=1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/receptionist-providing-luxury-service_482257-78605.jpg",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E1T79FDLvD89OAMo7divZiLKNm/uploaded-1779345332564-53d70tsz.jpg?_wi=2",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E1T79FDLvD89OAMo7divZiLKNm/uploaded-1779345332564-y15a3xxm.jpg?_wi=1",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E1T79FDLvD89OAMo7divZiLKNm/uploaded-1779345332564-hgmyq6p6.jpg?_wi=2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/city-building-with-rusty-surface_23-2148814156.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-happy-bridegroom-wearing-stylish-blue-jacket-white-shirt-red-tie-concentrating-writing-text-digital-device-while-sitting-table-room-with-vintage-decor_8353-12595.jpg",
        },
      ]}
      buttons={[
        {
          text: "Book via MakeMyTrip",
          href: "https://www.makemytrip.com",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/city-background-panoramic-view_23-2148892972.jpg",
          alt: "Guest 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/city-background-panoramic-view_23-2148892970.jpg",
          alt: "Guest 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-blue-hat-sits-windowsill-cafe_8353-194.jpg",
          alt: "Guest 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/view-st-petersburg-night_1398-2739.jpg",
          alt: "Guest 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/elderly-woman-hotel-sofa-with-laptop_482257-102647.jpg",
          alt: "Guest 5",
        },
      ]}
      avatarText="Trusted by 500+ happy guests"
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/dark-column-with-orange-hut_23-2148106967.jpg",
          alt: "Icon 1",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/ai-generated-modern-styled-entryway_23-2150692147.jpg",
          alt: "Icon 2",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/decorated-front-door_23-2150562486.jpg",
          alt: "Icon 3",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/black-hair-sexy-woman-glasses-coat-posed-against-building-with-modern-windows_627829-8622.jpg",
          alt: "Icon 4",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/person-does-check-reception_482257-76233.jpg",
          alt: "Icon 5",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="Welcome to Hotel Silk"
      description="Situated conveniently at Field Marshal Rd, Mota Mava, Rajkot, Hotel Silk combines comfort with local hospitality. Our mission is to provide an elite experience for every guest, whether you are here for business or leisure."
      subdescription="Our well-appointed rooms are designed to provide you with the most relaxing stay in Rajkot."
      icon={Building2}
      imageSrc="http://img.b2bpic.net/free-photo/white-pillow-bed_74190-4628.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Exquisite Amenities"
      description="Enjoy world-class service and state-of-the-art facilities crafted for a perfect stay."
      accordionItems={[
        {
          id: "f1",
          title: "Luxury Bathrooms",
          content: "Our rooms feature modern bathrooms with hot water and premium fixtures.",
        },
        {
          id: "f2",
          title: "Hospitality",
          content: "Our dedicated staff is committed to making your stay seamless.",
        },
        {
          id: "f3",
          title: "Relaxing Lounge",
          content: "Unwind in our aesthetically pleasing lobby lounge areas.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-luxury-bathroom-interior-with-natural-stone-tiles-bathtub_1194-640320.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "standard",
          badge: "Best Value",
          price: "₹3350 / night",
          subtitle: "Luxury Room Stay",
          features: [
            "Capacity: 2 Adults",
            "Modern Furniture",
            "Attached Bathroom",
            "High-Speed Wi-Fi",
          ],
          buttons: [
            {
              text: "Book Now",
              href: "https://www.makemytrip.com",
            },
          ],
        },
      ]}
      title="Room Rates"
      description="Luxury living at an affordable price per night."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Ananya P.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-adult-having-fun-white-party_23-2149575113.jpg",
        },
        {
          id: "t2",
          name: "Rajesh K.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-blonde-girl-wearing-summer-hat-celebrating-mad-crazy-success-with-arms-raised-closed-eyes-screaming-excited-winner-concept_839833-17908.jpg",
        },
        {
          id: "t3",
          name: "Sneha R.",
          imageSrc: "http://img.b2bpic.net/free-photo/mid-shot-girl-with-hat-camera_23-2148752373.jpg",
        },
        {
          id: "t4",
          name: "Vikram S.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-elder-tourist-woman_23-2148620263.jpg",
        },
        {
          id: "t5",
          name: "Pooja M.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-guy-with-breakfast-bed-girlfriend_23-2148334447.jpg",
        },
      ]}
      cardTitle="What Guests Say"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "What is the check-in time?",
          content: "Check-in starts from 12:00 PM.",
        },
        {
          id: "q2",
          title: "Are there dining facilities?",
          content: "We offer premium dining recommendations and room services.",
        },
        {
          id: "q3",
          title: "Is parking available?",
          content: "Yes, we provide safe parking space for our guests.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contact"
      title="Get In Touch"
      description="Visit us at Field Marshal Rd, Mota Mava, Rajkot. We look forward to welcoming you."
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3E1T79FDLvD89OAMo7divZiLKNm/uploaded-1779345332564-y15a3xxm.jpg?_wi=2"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Hotel Silk"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Rooms",
              href: "#pricing",
            },
            {
              label: "About",
              href: "#about",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Booking Info",
              href: "https://www.makemytrip.com",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Hotel Silk Rajkot. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
