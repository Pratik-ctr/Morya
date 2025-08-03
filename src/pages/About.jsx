import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-[#fffaf0] py-12 px-6 md:px-24 text-gray-800">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">आमच्याविषयी</h1>
          <p className="text-lg">
            आम्ही आपल्या गणपती मंडळाचा अभिमान आहोत. सामाजिक, सांस्कृतिक आणि आध्यात्मिक उपक्रमांच्या माध्यमातून समाजातील लोकांना एकत्र आणणे हेच आमचे ध्येय आहे.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-orange-500 mb-2">📍 आमचे उद्दिष्ट</h2>
            <p className="text-md text-gray-700">
              गणेशोत्सवाचा उत्सव साजरा करताना, संस्कृती आणि परंपरेचे जतन करणे, सामाजिक उपक्रमांमध्ये सहभाग घेणे आणि समाजात एकता निर्माण करणे हे आमचे प्रमुख उद्दिष्ट आहे.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-orange-500 mb-2">🤝 समाजासाठी सेवा</h2>
            <p className="text-md text-gray-700">
              आरोग्य शिबिरे, रक्तदान शिबिरे, शालेय गरजू विद्यार्थ्यांना मदत, स्वच्छता मोहिमा यासारख्या अनेक उपक्रम आम्ही राबवत आहोत.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-orange-500 mb-4">🙏 तुमचा पाठिंबा आमच्यासाठी महत्त्वाचा आहे!</h2>
          <p className="text-md text-gray-700">
            आपल्या उपस्थितीमुळेच हा उत्सव अधिक चैतन्यमय होतो. आपण आम्हाला साथ दिल्याबद्दल धन्यवाद!
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About
