import React from "react";
import icon from "../../image/Group 9969.png";

const Footer = () => {
  return (
    <footer>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 bg-black p-12 gap-5">
        <div>
          <h1 className="text-3xl font-bold text-white mb-4 title-text -mt-2">
            CHEFHERO
          </h1>
          <p className="text-zinc-500 mb-6">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <img className="cursor-pointer" src={icon} alt="" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white mb-4 title-text">
            Company
          </h1>
          <ul className="text-zinc-500 leading-7">
            <li>About Us</li>
            <li>Works</li>
            <li>Latest News</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold text-white mb-4 title-text">
            Products
          </h1>
          <ul className="text-zinc-500 leading-7">
            <li>Foods</li>
            <li>Plans and Pricing</li>
            <li>Customers</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg title-text font-bold text-white mb-4">
            Support
          </h1>
          <ul className="text-zinc-500 leading-7">
            <li>Help Desk</li>
            <li>Sales</li>
            <li>Become a Partner</li>
            <li>Chef</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg title-text font-bold text-white mb-4">
            Contact
          </h1>
          <ul className="text-zinc-500 leading-7">
            <li>524 Broadway , </li>
            <li>NYC +1 777 - 978 - 5570</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
