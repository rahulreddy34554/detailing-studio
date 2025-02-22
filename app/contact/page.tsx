// app/contact/page.jsx

import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="text-center py-16">
        <h1 className="text-6xl font-extrabold">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-400"><span> <a href= "/">Home </a></span>/ Contact</p>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 py-12">
        {/* Contact Form */}
        <div className="bg-zinc-800 p-8 rounded-xl">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name..."
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="example@yourmail.com"
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Title..."
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none"
            />
            <textarea
              placeholder="Type Here..."
              className="w-full p-3 bg-zinc-700 rounded-lg focus:outline-none"
             
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-300"
            >
              Send Now
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <p className="text-lg text-gray-400 mb-8">
            In tempus nisi turpis, at ultricies dui eleifend a. Quisque et quam vel
            nunc consectetur pharetra euismod et elit.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <span>📞</span>
              <p>Phone Number: 9848898488</p>
            </div>
            <div className="flex items-center space-x-4">
              <span>📧</span>
              <p>Email Address: example@email.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <span>💬</span>
              <p>WhatsApp: 9848898488</p>
            </div>
            <div className="flex items-center space-x-4">
              <span>📍</span>
              <p>Our Office: saboodetailingstudio</p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.17404136475!2d-74.11808655804892!3d40.70531173215702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250bd7d5a1bbd%3A0x4fddc19e51f4ed5b!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1679938744257!5m2!1sen!2sus"
                width="100%"
                height="300"
                className="rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        <Image
          src="https://wrapstylesydney.com.au/wp-content/themes/wrapstyle-sydney/assets/images/carousel/slide_3_v3.jpg"
          alt="We Are Always Ready"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold">We Are Always Ready To Take A Perfect Shot</h2>
        </div>
      </div>

      
    </div>
  );
}
