import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AboutAzra,
  FeatureSection,
  Image,
  ImageSlider,
  PostsSection,
  PricingAndPlans,
  Services,
  SwiperSection,
  Testimonials,
  WhatsAppButton,
  WhyChoseUs,
} from "../components";
import EnquiryForm from "../components/EnquiryForm";
import EnquiryFormNoBg from "../components/EnquiryFormNoBG";
import { WhatWeDo } from "../components/home/WhatWeDo";
import ctaImage from "../public/images/home/home-cta.jpeg";
import {
  featuredClients,
  featuredOurResults,
  whatWeOffer,
} from "../utils/data";

const Home = () => {
  return (
    <div className="h-full bg-white w-full">
      {/* Main Slider Section */}
      <SwiperSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* About Azra Section */}
      <AboutAzra />

      {/* What do we offer section */}
      <div className="bg-gray py-24">
        <div className="container mx-auto">
          <div className="text-center font-title text-5xl mb-4">
            What Do We Offer?
          </div>
          <div className="text-dark-gray text-center w-full max-w-xl mx-auto text-lg mb-10">
            We understand that you are special – and your body requirements are
            unique. We work to design unique diet plans specifically for:
          </div>
          {/* <Services services={whatWeOffer} /> */}
          <WhatWeDo services={whatWeOffer}></WhatWeDo>
        </div>
      </div>
      <div className="w-full flex justify-center ">
        <EnquiryForm  />
      </div>
      {/* Real Clients, Real Transformations Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto">
          <div className="text-center font-title text-4xl mb-16">
            Real Clients, Real Transformations
          </div>
          <ImageSlider
            lazyBoundary="500px"
            classId="real-clients"
            images={featuredClients}
          />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <WhyChoseUs />

      {/* Our Results Speak - When They can, so can You ! */}
      <div className="bg-gray py-28">
        <div className="container mx-auto">
          <div className="text-center font-title text-4xl mb-16">
            Our Results Speak - When They can, so can You !
          </div>
          <ImageSlider
            lazyBoundary="800px"
            classId="our-results"
            images={featuredOurResults}
          />
        </div>
      </div>

      {/* Pricing and Plans */}
      <PricingAndPlans />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA section */}
      <div className="relative h-[80vh] md:h-[100vh] lg:h-[120vh] w-full">
        <div className="absolute z-30 top-10 lg:top-28 left-5 lg:left-28">
          <FontAwesomeIcon
            icon={faLeaf}
            size="5x"
            className="text-primary mb-4 hidden lg:flex"
          />
          <div className="text-2xl lg:text-6xl font-title w-full max-w-2xl mb-4">
            We Are Excited To Make You Healthier
          </div>
          <div className="mb-4">
            WhatsApp us or Chat with us - We respond immediately!
          <EnquiryFormNoBg/>
          </div>
          {/* <WhatsAppButton /> */}
        </div>
        <Image
          src={ctaImage}
          layout="fill"
          objectFit="cover"
          alt="We are excited to make you healthier"
        />
      </div>
    </div>
  );
};

export default Home;
