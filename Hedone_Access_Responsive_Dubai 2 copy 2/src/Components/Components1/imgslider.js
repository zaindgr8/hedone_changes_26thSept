import React from 'react'
import Boxes from "../MemberShip/boxes.js"
import consultency from "../../Assets/consultency.avif"
import travel from "../../Assets/travel.avif"
import events from "../../Assets/events.avif"
import re2 from "../../Assets/re2.jpg"
import bm1 from "../../Assets/b&m1.jpg"
import art from "../../Assets/art.avif"

function imgslider() {
  return (
   <>
  <div id="services" className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-8 max-w-[90%] mx-auto mt-10'>
<Boxes title="Business Consultancy" description="Our top-tier private concierge company, assigns dedicated Lifestyle Managers to provide personalized consultancy services. These experts offer tailored recommendations and expert advice." image={consultency} 
 bullets={[
    "Market Analysis",
    "Individualized Business Analyses",
    "Business Planning",
    "Implementation"
  ]}/>
  <Boxes title="Branding & Marketing" description="Not only can Hedone Access provide prime consultancy but also we take care of your branding and marketing. Hedone Access has the know-how and the network to reach your target audience."
 
 image={bm1} 
 bullets={[
  "Gain Visibility ",
  "Stand out from your competitors",
 " Earn people’s trust and loyalty ",
 " Benefit from our network "
  
  ]}/>

<Boxes title="Premium Real Estate" description="Whether you seek a luxury home, 
investment property, or unique living space, we provide personalized 
guidance and access to exclusive listings to help you find your dream property."
 
 image={re2} 
 bullets={[
  "Rent, Buy, Sell, Invest ",
"Save your time and energy" ,
"Be the first to know about the newest deals ",
"Get access to exclusive private properties "
  ]}/>

<Boxes title="Travel Services" description="With our expert travel recommendations and access to premium amenities, we ensure every trip is a memorable adventure designed around your desires. We specialize in crafting exceptional travel experiences. " image={travel} 
 bullets={[
  "Flights, Accommodations, Rented Cars",
  "Restaurants, Activities, Nightlife",
 " Lean back and enjoy your travel",
  "We take care of your individual needs"
  ]}  />
<Boxes title="Events" description="Our team specializes in crafting unforgettable experiences, from private celebrations to corporate gatherings. With meticulous planning and attention to detail, we ensure that every event reflects your vision." image={events} 
 bullets={[
  "Get invited to exclusive events.",
"Get VIP access to popular events",
"Private or Corporate gatherings",
"Weddings &  Parties" 

  ]}  />

<Boxes title="Artistic Masterpieces" 
description="Offering an unparalleled experience in acquiring and appreciating 
unique artworks. With a keen eye for the extraordinary and a dedication to 
personalized service, you will be able to collect art like never before." image={art} 
 bullets={[
"Access to exclusive vernissages and galleries",
"Build and expand your own collection ",
"Open your own gallery ",
"Access to unique assets of art and more "
  ]}  />
</div>
   </>
  )
}

export default imgslider