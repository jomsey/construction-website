export default function Disclaimer() {
  return (
    <main>
      <section className='h-96 projects-landing z- w-full px-12 relative flex flex-col justify-center lg:px-24 mt-1' >
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
        <h1 className="text-white font-bold text-5xl relative  w-11/12 md:text-6xl  md:w-1/2">Our <span className="text-green-500">Disclaimer</span></h1>
        {/* <p className="text-green-50 leading-8 text-base font-medium md:w-3/4 mt-10 relative mb-10 ms:mb-0">Welcome to Build Africa.This discliamer outlines the terms and conditions  governing the use our website.By accesing or using our site , you agre to the terms listed in this disclaimer.If you do not agree wit any part of this disclaimer , please refrain from using our services</p> */}
      </section>

      <section className="p-12 md:p-24 flex flex-col justify-center items-center gap-8">
        <div>
          <h2 className="text-bold text-xl text-gray-900">Content Accuracy</h2>
          <p className="text-sm font-medium leading-8 mt-5 text-gray-600">While we make every effort to ensure the accuracy of the information provided
            on our website, we do not guarantee the completeness, timeliness, or accuracy
            of the content. The information is provided for general informational purposes
            only and should not be considered professional advice.</p>
        </div>
        <div>
          <h2 className="text-bold text-xl text-gray-900">External Links</h2>
          <p className="text-sm font-medium leading-8 mt-5 text-gray-600">Our website may contain links to external websites for additional information
            or resources. These links are provided for your convenience, and we do not
            endorse the content or take responsibility for the accuracy of information on
            these external sites. Visiting external links is at your own risk.</p>
        </div>
        <div>
          <h2 className="text-bold text-xl text-gray-800">Use of Information</h2>
          <p className="text-sm font-medium leading-8 mt-5 text-gray-700">The content on our website is intended for general information purposes and
            should not be construed as professional advice or services. Any reliance on
            the information provided is at your own discretion. We recommend seeking
            professional advice relevant to your specific circumstances.</p>
        </div>
        <div>
          <h2 className="text-bold text-xl text-gray-800">Technical Issues</h2>
          <p className="text-sm font-medium leading-8 mt-5 text-gray-700"> We strive to maintain the availability and functionality of our website.
            However, we are not responsible for any disruptions, technical issues, or
            temporary unavailability of the site. We reserve the right to suspend, modify,
            or discontinue our services at any time.</p>
        </div>
        <div>
          <h2 className="text-bold text-xl text-gray-800">Changes to Disclaimer</h2>
          <p className="text-sm font-medium leading-8 mt-5 text-gray-700">We reserve the right to update, modify, or replace this disclaimer without
            prior notice. Any changes will be effective immediately upon posting. It is
            your responsibility to review this page periodically for updates. Continued
            use of our services after modifications constitutes acceptance of the updated
            disclaimer.</p>
        </div>
      </section>
    </main>
  );
}