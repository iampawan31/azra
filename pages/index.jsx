import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { db } from '../firebase-config'
import ctaImage from '../public/images/home/home-cta.jpeg'
import { POSTS, TESTIMONIALS } from '../utils/constants'
import { featuredClients, featuredOurResults, whatWeOffer } from '../utils/data'

const AboutAzra = dynamic(() => import('../components/home/AboutAzra'))
const PostSlider = dynamic(() => import('../components/home/PostSlider'))
const ImageSlider = dynamic(() => import('../components/home/ImageSlider'))
const Testimonials = dynamic(() => import('../components/home/Testimonials'))
const WhyChoseUs = dynamic(() => import('../components/home/WhyChoseUs'))
const PricingAndPlans = dynamic(() =>
  import('../components/home/PricingAndPlans')
)
const Calendly = dynamic(() => import('../components/Calendly'))
const FeatureSection = dynamic(() => import('../components/FeatureSection'))
const Image = dynamic(() => import('../components/Image'))
const WhatsAppButton = dynamic(() => import('../components/WhatsAppButton'))
const SwiperSection = dynamic(() => import('../components/SwiperSection'))
const Services = dynamic(() => import('../components/Services/Services'))

const Home = () => {
  const [testimonials, setTestimonials] = useState([])
  const [posts, setPosts] = useState([])

  const getTestimonials = async () => {
    const testimonialsRef = collection(db, TESTIMONIALS)
    const q = query(testimonialsRef)
    const querySnapshot = await getDocs(q)
    let data = []
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    setTestimonials(data)
  }

  const getPosts = async () => {
    const latestPostsRef = collection(db, POSTS)
    const qPosts = query(
      latestPostsRef,
      orderBy('publishedDate', 'desc'),
      limit(10)
    )

    const queryPostsSnapshot = await getDocs(qPosts)
    let data = []

    queryPostsSnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        ...doc.data(),
      })
    })

    setPosts(data)
  }

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
          <Services services={whatWeOffer} />
        </div>
      </div>

      {/* Real Clients, Real Transformations Section */}
      <div className="bg-white py-28">
        <div className="container mx-auto">
          <div className="text-center font-title text-4xl mb-16">
            Real Clients, Real Transformations
          </div>
          <ImageSlider classId="real-clients" images={featuredClients} />
        </div>
      </div>

      {/* Why Choose Us Section */}
      <WhyChoseUs />

      {/* Calendly Section */}
      <Calendly />

      {/* Our Results Speak - When They can, so can You ! */}
      <div className="bg-gray py-28">
        <div className="container mx-auto">
          <div className="text-center font-title text-4xl mb-16">
            Our Results Speak - When They can, so can You !
          </div>
          <ImageSlider classId="our-results" images={featuredOurResults} />
        </div>
      </div>

      {/* Pricing and Plans */}
      <PricingAndPlans />

      {/* Testimonials Section */}
      {testimonials && <Testimonials testimonials={testimonials} />}

      {/* Latest Posts Section */}

      <div className="py-16 px-4 lg:px-0">
        <div className="text-center font-title text-4xl mb-4">
          Our Latest News
        </div>
        <div className="container mx-auto">
          <div className="w-full mx-auto text-center max-w-2xl">
            Top stories featured on Health & Medicine, Mind & Brain, and Living
            Well sections. Your source for the latest research news.
          </div>
          {posts && <PostSlider posts={posts} />}
        </div>
      </div>

      {/* CTA section */}
      <div className="relative h-72 lg:h-128 w-full">
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
          </div>
          <WhatsAppButton />
        </div>
        <Image
          src={ctaImage}
          layout="fill"
          objectFit="cover"
          alt="We are excited to make you healthier"
        />
      </div>
    </div>
  )
}

export default Home
