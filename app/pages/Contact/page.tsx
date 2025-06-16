import HeroContact from '@/app/landing/components/Contact/HeroContact';
import Footer from '@/app/landing/components/Home/footer/footer';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

type ContactInfoItemProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

const ContactInfoItem = ({ icon, title, text }: ContactInfoItemProps) => (
  <div className="flex items-start gap-4">
    <div className="w-6 h-6 text-orange-500">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  </div>
);

const ContactPage = () => {
  return (
    <>
     <HeroContact/>
    <div className="min-h-screen mt-20 bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8">
        
        {/* Contact Details */}
            <div className="flex-1 p-8">
        <p className="text-orange-500 text-sm font-semibold tracking-widest mb-2">LET'S CONNECT</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Find Our Contact Details Below.</h1>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <div className="space-y-6">
          <ContactInfoItem
            title="Our Location"
            text="Jakarta Indonesia Long Street Number 103 Block ABC"
            icon={<HiOutlineLocationMarker className="w-6 h-6 text-orange-500" />}
          />
          <ContactInfoItem
            title="Email Address"
            text="Hello@email.com"
            icon={<HiOutlineMail className="w-6 h-6 text-orange-500" />}
          />
          <ContactInfoItem
            title="Telephone"
            text="+44 123 456 789"
            icon={<HiOutlinePhone className="w-6 h-6 text-orange-500" />}
          />
        </div>
      </div>
        {/* Contact Form */}
        <div className="flex-1 bg-blue-900 text-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Use The Contact Form Below To Send Us A Message.</h2>
          <p className="text-gray-300 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <form className="space-y-4">
            <div className="flex gap-4">
              <input type="text" placeholder="First Name Eg. Jane" className="w-full p-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <input type="text" placeholder="Last Name Eg. Cale" className="w-full p-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <div className="flex gap-4">
              <input type="email" placeholder="Email" className="w-full p-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              <input type="text" placeholder="Subject" className="w-full p-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>
            <textarea placeholder="Your message..." className="w-full p-3 rounded-2xl text-gray-900 h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            <button type="submit" className="w-full bg-orange-500 text-white font-semibold py-3 rounded-full hover:bg-orange-600 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default ContactPage;
