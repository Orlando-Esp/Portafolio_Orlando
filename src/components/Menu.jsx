import React from 'react';
import { Link } from 'react-router-dom';
import javascriptLogo from '../assets/javascript.png';
import pythonLogo from '../assets/python.png';
import javaLogo from '../assets/java.png';
import rubyLogo from '../assets/ruby.png';
import phpLogo from '../assets/php.png';
import cLogo from '../assets/c.png';
import cppLogo from '../assets/cpp.png'; 

const languages = [
  { name: 'JavaScript', url: 'javascript', logo: javascriptLogo },
  { name: 'Python', url: 'python', logo: pythonLogo },
  { name: 'Java', url: 'java', logo: javaLogo },
  { name: 'PHP', url: 'php', logo: phpLogo },
  { name: 'C++', url: 'cpp', logo: cppLogo }, 
];

function Menu() {
  return (
    <section className="my-8 p-4 bg-secondary rounded-lg shadow-lg">
      <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
        {languages.map(language => (
          <Link
            key={language.name}
            to={`/programs/${language.url}`}
            className="flex items-center space-x-2 px-2 sm:px-4 py-2 bg-primary text-light rounded shadow hover:bg-accent hover:text-primary transition"
          >
            <img src={language.logo} alt={`${language.name} logo`} className="w-4 h-4 sm:w-6 sm:h-6" />
            <span>{language.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Menu;
