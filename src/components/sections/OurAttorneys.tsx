import React from 'react';
import AttorneysCard from '../AttorneysCard';
import { motion } from 'framer-motion';

const fadeInUpVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1 + index * 0.2,
    },
  }),
};

const OurAttorneys: React.FC = () => {
  const attorneys = [
    {
      name: 'Ashley Fletcher',
      role: 'Lawyer & CEO',
      avatar: 'https://s3-alpha-sig.figma.com/img/7601/70d6/61e60230b3c61b45db6cd82b20dfa31a?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j9HrOxf57TlYXPtsGXrAIwBJkbsjG~~ogC36VdeeKFLyR1LKn8qUDZvbbQj-JE8QSfTSHDP0FG7Wkr6o4QhzEKNZwfN0Ldxkym2MEhXf1Pe1S~xsAc31eves4zI5il31WUaA0tD9zJedBt7eWofrod6VibXwtrFaaNaGWux5hdV~46YsH38zdB3UhDmqaGpBxgGA88vpm~hZkssHNBgpX-jV5R5eyA3aRAuBIun55yOaly6M2-7ZCB-om3Lzh0TFqL4xQhfrc3trqJuBluT9tIBt-xlNNgm9wCE9CrB1REf8RcoygVLjlff-AfVaeJMF~h8zzV~hwKZELWWUTlifrg__',
    },
    {
      name: 'Rodney Stratton',
      role: 'CEO',
      avatar: 'https://s3-alpha-sig.figma.com/img/7cfd/7953/888383a125192e128b065d2a80372b4d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KxAr7TQV7t1A7vcJqbKz9KyE5B8oMNpkPNbyX0kfB0ru7o0NhtTUBj6SwgJsjo8fbk6hTiFX2j24Nb9eBqwakCNEVUknKPd2YftLDSiERAEaY5ZWLjpciPVp3u5y-jUGXz7iC5ixpRpU3XH2IQvl6gRZcQRUB1TPThNW5CfiKbTMVSfXlUXbdQH-WkJRaa1PAQZdxxTTBuiV9e-pSav1trrgM9XLe7v2cAn7kbbdFlAZSle7IEpbPsRHzblklHQamslBs9-AcsDDI7dEX0S0hjqazvBic1gATMSARUo9VtB7yB6iH~DeWmfZjjwn2KQMga8VRkMYdeyunDZrtv-pYw__',
    },
    {
      name: 'Avie Beaton',
      role: 'Lawyer Civil Law',
      avatar: 'https://s3-alpha-sig.figma.com/img/e686/f640/aa685b9f3c9fc47f51a1014cc028a958?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nRxIFrf~YLiOe0-iJ5lO2o-6zBMS1OuDwgdIpyKtDD8hRFHsJ~WqRks0VBr9M15rdaSR0ahmggtLJOXMNaVEQQWT9cvNwrpYrhLmbuTVFIpLMKi5Lmdijx0zaOYK0Sd8hzZY2k4KVwvtcIsMtAG4PODmLja9gTASDx-e3zWcpH8CXARid2lYz1uI2gkk6gJUJ8KxJDbpMIwD9eylv2RG6M3Lb9Goq7~XDzRNF8hU1rZXEpxS0aW7B6DhsrZm5vl8zOfbq6J59PR479qUZXClarxNBLore7VO0aKBeQRc-05YUkFzO6CFGsIEQOV8-CBIEgum3cbRuUu1JjQoTVg4vQ__',
    },
  ];

  return (
    <section className="py-12 px-6 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#252b42]">Meet Our Attorneys</h2>
        <p className="text-[#252b42] mb-8">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex flex-col justify-center lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          {attorneys.map((attorney, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUpVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <AttorneysCard
                name={attorney.name}
                role={attorney.role}
                avatar={attorney.avatar}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAttorneys;
