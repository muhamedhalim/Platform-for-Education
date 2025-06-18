import ContactForm from '@/app/landing/components/Contact/ContactForm';
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
        <ContactForm />
      </div>
    </div>
    <Footer/>
    </>
   
  );
};

export default ContactPage;
