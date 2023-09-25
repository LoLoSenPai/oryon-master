import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import './Contact.css';
import ContactComponent from '../../Components/ContactComponent/ContactComponent';

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="global-accordion-container">
      <div className="accordion-box accordion-container">
        <h2 className="accordion-box-title">Frequently Asked Questions</h2>
        <div className="accordion__container">
          {[
            {
              title: "Who is Oryon Merch?",
              description:
                "We are a group of NFTs Lovers, Alpha callers, and many more..."
            },
            {
              title: "What is Oryon Merch?",
              description:
                "Oryon Merch is a shop that sells various merchandise items. It offers a wide range of products such as clothing, accessories, and home goods."
            },
            {
              title: "Where can I find Oryon Merch?",
              description:
                "Oryon Merch is available online. You can find our products on our website, or on other online shopping platforms such as Amazon, Etsy, and more."
            },
            {
              title: "Why should I choose Oryon Merch?",
              description:
                "Oryon Merch offers high-quality products at affordable prices. Our products are made with care and attention to detail, and we have a friendly and helpful customer service team."
            }
          ].map((item, index) => (
            <div className="accordion__item" key={index}>
              <header className="accordion__header" onClick={() => handleAccordionClick(index)}>
                <h3 className="accordion__title">{item.title}</h3>
              </header>
              <div
                className="accordion__content"
                style={{ height: index === openIndex ? 'auto' : 0 }}
              >
                <p className="accordion__description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactComponent />
      <Footer />
    </section>
  );
};

export default Contact;
