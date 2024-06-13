import React from 'react';
import profileImage from '../assets/profile.jpg'; 
import 'animate.css/animate.min.css';
import '../index.css'; // Asegúrate de importar tu archivo CSS personalizado

function Profile() {
  const handleImageClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="profile" className="my-8 p-4 sm:p-8 bg-secondary text-light rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <div className="relative cursor-pointer" onClick={handleImageClick}>
          <img
            src={profileImage}
            alt="Profile"
            className="rounded-full w-24 h-24 sm:w-32 sm:h-32 border-4 border-accent animate-pulse"
          />
          <div className="absolute inset-0 rounded-full border-4 border-accent animate-ping"></div>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mt-4 animate-hangFall">HOLA!!! SOY</h1>
        <h1 className="text-2xl sm:text-3xl font-bold mt-4 animate-hangFall">ORLANDO ESPINOZA VALENTIN</h1>
        <p className="mt-4 text-center max-w-md">Soy estudiante de ingeniería en sistemas computacionales y actualmente tengo 22 años. Este portafolio contiene algunos de los trabajos que he realizado, incluyendo proyectos como un semáforo, un sistema de ventas, y un algoritmo de búsqueda tabú, entre otros.</p>
      </div>
    </section>
  );
}

export default Profile;
