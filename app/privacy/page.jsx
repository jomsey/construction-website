export default function Disclaimer() {
  return (
    <main>
      <section className='h-96 projects-landing z- w-full px-12 relative flex flex-col justify-center lg:px-24 mt-1' >
        <div className='absolute w-full h-full top-0 left-0 bg-black opacity-30'></div>
        <h1 className="text-white font-bold text-5xl relative  w-11/12 md:text-6xl  md:w-1/2">Our Privacy Policy</h1>
      </section>

      <section className="p-12 md:p-24 flex flex-col justify-center items-center gap-8">
        <div>
          <h2 className="text-bold text-xl text-gray-900">Information Collection and Use</h2>
          <p className="text-sm font-medium leading-8 mt-5 text-gray-600"> We collect personal information, such as names, email addresses, and contact
            details, only when voluntarily provided by users. This information is utilized
            for communication, providing requested services, and enhancing user
            experience. We assure you that we do not share, sell, or disclose your
            personal information to third parties unless required by law or with your
            explicit consent.</p>
        </div>
        <div>
          <h2 className="text-bold text-xl text-gray-900">Cookies and Tracking</h2>
          <p className="text-sm font-medium leading-8 mt-5 text-gray-600">Our website may use cookies and other tracking technologies to enhance user
            experience and analyze site traffic. Cookies are small text files stored on
            your device that help us improve functionality and tailor content to your
            preferences. You can manage cookie preferences through your browser settings,
            but please note that disabling cookies may affect certain features of our
            website</p>
        </div>
        <div>
          <h2 className="text-bold text-xl text-gray-800">Data Security</h2>
          <p className="text-sm font-medium leading-8 mt-5 text-gray-700">We prioritize the security of your personal information. We implement
            industry-standard measures to protect against unauthorized access, alteration,
            disclosure, or destruction of data. Our secure systems and protocols aim to
            ensure the confidentiality and integrity of the information you entrust to us.</p>
        </div>
        <div>
          <h2 className="text-bold text-xl text-gray-800">Updates and Contact</h2>
          <p className="text-sm font-medium leading-8 mt-5 text-gray-700"> We reserve the right to update this Privacy Policy to reflect changes in our
            practices or applicable laws. We encourage you to review this page
            periodically for any amendments. If you have questions, concerns, or requests
            regarding your personal information or this Privacy Policy, please contact us.</p>

          <p className="text-sm font-medium leading-8 mt-5 text-gray-700">By continuing to use our services, you acknowledge that you have read and
            understood our Privacy Policy. Your continued use of the website following any
            updates constitutes acceptance of those changes. Thank you for trusting Build Africa.</p>
        </div>
      </section>
    </main>
  );
}