import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function ContactSection() {
  return (
    <section id="contact" className="my-12 p-8 bg-secondary text-light rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Información de Contacto</h2>
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
          <a href="mailto:espinozaorlando789@gmail.com" className="hover:text-accent">espinozaorlando789@gmail.com</a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FontAwesomeIcon icon={faPhone} className="text-xl" />
          <a href="tel:+525521786195" className="hover:text-accent">+52 5521786195</a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FontAwesomeIcon icon={faFacebook} className="text-xl" />
          <a href="https://www.facebook.com/profile.php?id=100004149494663&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Orlando Espinoza</a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
          <a href="https://github.com/Orlando-Esp" target="_blank" rel="noopener noreferrer" className="hover:text-accent">Orlando-Esp</a>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
          <a href="https://wa.me/525521786195" target="_blank" rel="noopener noreferrer" className="hover:text-accent">+52 5521786195</a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
