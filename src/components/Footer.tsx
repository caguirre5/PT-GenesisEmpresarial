import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#252b42] text-white text-start pt-8">
      <div className="container  px-10 lg:px-[15%]">
        
        <div className="order-1 mt-10 lg:mt-4 mb-14 flex flex-col lg:flex-row lg:justify-between items-start">
            <h2 className="text-2xl">Litigade</h2>
          <div className="flex space-x-4 mt-8 lg:m-0">
            <a href="#" className="hover:underline">
              <FontAwesomeIcon icon={faFacebook} size="lg" className="text-[#335bf5]"/>
            </a>
            <a href="#" className="hover:underline">
              <FontAwesomeIcon icon={faInstagram} size="lg" className="text-[#d92059]"/>
            </a>
            <a href="#" className="hover:underline">
              <FontAwesomeIcon icon={faTwitter} size="lg" className="text-[#21a6df]"/>
            </a>
            <a href="#" className="hover:underline">
              <FontAwesomeIcon icon={faYoutube} size="lg" className="text-[#e42f08]"/>
            </a>
          </div>
        </div>
        <div className="order-2 flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col lg:flex-row lg:space-x-12 mb-8 lg:mb-0">
            <div className="mb-6 lg:mb-0">
              <h6 className="text-lg font-semibold mb-4">Company Info</h6>
              <ul>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Carrier</a></li>
                <li><a href="#" className="hover:underline">We are hiring</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h6 className="text-lg font-semibold mb-4">Legal</h6>
              <ul>
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Carrier</a></li>
                <li><a href="#" className="hover:underline">We are hiring</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h6 className="text-lg font-semibold mb-4">Features</h6>
              <ul>
                <li><a href="#" className="hover:underline">Business Marketing</a></li>
                <li><a href="#" className="hover:underline">User Analytic</a></li>
                <li><a href="#" className="hover:underline">Live Chat</a></li>
                <li><a href="#" className="hover:underline">Unlimited Support</a></li>
              </ul>
            </div>
            <div className="mb-6 lg:mb-0">
              <h6 className="text-lg font-semibold mb-4">Resources</h6>
              <ul>
                <li><a href="#" className="hover:underline">IOS & Android</a></li>
                <li><a href="#" className="hover:underline">Watch a Demo</a></li>
                <li><a href="#" className="hover:underline">Customers</a></li>
                <li><a href="#" className="hover:underline">API</a></li>
              </ul>
            </div>
          </div>
          <div className="lg:max-w-xs mb-14">
            <h6 className="text-lg text-start font-semibold mb-4">Get In Touch</h6>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 flex-grow rounded-l-md bg-white"
              />
              <button className="bg-[#d0a144] text-white p-2 rounded-r-md">Subscribe</button>
            </div>
            <p className="mt-4 text-sm">Lorem ipsum dolor amit</p>
          </div>
        </div>
      </div>
      <div className='h-20 flex justify-center items-center bg-[#056fae]'>
        <p className="text-sm  text-center lg:text-right ">
            Made With Love By Figmaland All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
