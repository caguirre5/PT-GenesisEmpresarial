import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const WhoWeAre: React.FC = () => {
  return (
    <section className="relative py-12 px-6 lg:pt-14 bg-[#F3F3F3]">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-4 text-[#252b42]">Who We Are</h2>
        <p className="text-[#252b42] mb-8">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <motion.div
          className="relative lg:w-[877px] lg:h-[442px] bg-white rounded-lg overflow-hidden shadow-md mx-auto "
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://s3-alpha-sig.figma.com/img/9d46/3b63/658795529bd868ba150c5a5eb80327fb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gr1wqeXIjevML8YGjM0V7p270ocjwtIecawQvmenCTNqi7zFENGPxF4tChFTWqaafhruVuxYP-iuKCBSRFS-6E2cxcsrkAynhhMzjpCn0oKSt6YEuFuDOMmDX6MRTIKNfCPIZAh04oFVNDJogD2eZ1VdH1NqXv7nHgbC7KoJNmj00MvjS236pgihu852VefrivimSnVteLbdeLlbg5fFvnN0gusV0K7w5ABVZ0tEDmvxP0ouN1G1eQZBASbG~8zAXlwafqnfOsZXMgMjXzXUUPeZF2rV8aFjQNLHREtUUZQeLbZCZNb~mqPkuQiwiv0AnAUtQPdgWYus1Rlr0KIAaA__"
            alt="Who We Are"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <FontAwesomeIcon icon={faPlayCircle} size="4x" className="text-white cursor-pointer" />
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-2/5 lg:h-1/2 bg-[#112f40] z-0"></div>
    </section>
  );
};

export default WhoWeAre;
