import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <p className="mb-4">We’d love to hear about your project.</p>
      <form className="space-y-4 w-full max-w-md">
        <input type="text" placeholder="Your Name" className="w-full p-2 border border-white rounded text-white" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border border-white rounded text-white" />
        <textarea placeholder="Your Message" className="w-full p-2 border border-white rounded text-white" rows="4"></textarea>
        <button className="w-full p-2 bg-pink-600 rounded text-white">Send Message</button>
      </form>
    </div>
  );
}
export default Contact;
