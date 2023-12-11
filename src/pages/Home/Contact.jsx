import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from "react";



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_68dr852', 'template_rhm9xq8', form.current, 'yGaVojgBxH4mOxreC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-20 p-5">
                <h1 className="text-[#111] text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r to-slate-600 from-black ">Contact</h1>
                <div className="grid grid-cols-1 md:grid-cols-2" data-aos="fade-in">
                    <div>
                        {/* <!-- contact 1  --> */}
                        <div className="flex items-center gap-x-8 mb-5">
                            <div className="bg-base-100 p-5 rounded-md shadow">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="">Mail Me</h4>
                                <p className="text-sm md:text-base md:font-medium">ablazerabbi159@gmail.com</p>
                            </div>
                        </div>
                        {/* <!-- contact 2  --> */}
                        <div className="flex items-center gap-x-8 mb-5">
                            <div className="bg-base-100 p-5 rounded-md shadow">
                                <FaPhone></FaPhone>
                            </div>
                            <div>
                                <h4 className="">Contact with me</h4>
                                <p className="font-medium">+880 1718-554726</p>
                            </div>
                        </div>
                        {/* <!-- contact 3  --> */}
                        <div className="flex items-center gap-x-8 mb-5">
                            <div className="bg-base-100 p-5 rounded-md shadow">
                                <FaLocationArrow></FaLocationArrow>
                            </div>
                            <div>
                                <h4 className="">Location</h4>
                                <p className="font-medium">Khilgaon, Dhaka, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-base-100 p-5 rounded-xl shadow-lg">
                        <h1  className="text-[#111] text-4xl lg:text-5xl  font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r to-slate-600 from-black">Let’s work together.</h1>
                        <form ref={form} onSubmit={sendEmail}> 
                        <input type="text" placeholder="Name" name="from_name" className="input input-bordered w-full mb-3" /> <br></br> 
                        <input type="text" placeholder="Email" name="from_email" className="input input-bordered w-full mb-3" /> <br></br>
                        <div className="form-control">
                            <textarea className="textarea textarea-bordered h-24" placeholder="Message" name="message"></textarea>
                          </div>
                          <button className="btn btn-block mt-3 bg-gradient-to-r to-slate-600 from-black text-white">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;