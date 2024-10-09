import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* Text and Illustration */}
        <div className="grid lg:grid-cols-2 pt-12 lg:h-[480px] mb-6 lg:mb-24">
          {/* Text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let&#39;s Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              consequatur adipisci voluptas et amet tempora.
            </p>
          </div>
          {/* Illustration */}
          <div className="hidden lg:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        <div className="grid lg:grid-cols-2 mb-24 lg:mb-32">
          {/* Info Text */}
          <div className="flex flex-col gap-y-4 lg:gap-y-14 mb-12 lg:mb-24 text-base lg:text-lg">
            {/* Mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>rruqia45@gmail.com</div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Zahir Pir, Punjab, Pakistan</div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+923042389829</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;