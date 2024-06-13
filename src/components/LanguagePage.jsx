import React from 'react';
import { useParams } from 'react-router-dom';
import githubLogo from '../assets/github.png'; 
import javascriptLogo from '../assets/javascript.png';
import pythonLogo from '../assets/python.png';
import javaLogo from '../assets/java.png';
import phpLogo from '../assets/php.png';
import cppLogo from '../assets/cpp.png';
import pokedexImage from '../assets/pokedex.png';
import usersimage from '../assets/adminusers.png';
import ventanaimage from '../assets/ventanas.png';
import randomimage from '../assets/randomforest.png';
import vrpimage from '../assets/vrp.png';
import ahorcadoimage from '../assets/ahorcado.jpg';
import analizadorimage from '../assets/analizador.png';
import puntoventaimage from '../assets/puntoventa.png';
import semaforoimage from '../assets/semaforo.png';
import llenadoimage from '../assets/llenado.png';

const languageData = {
  javascript: {
    title: "Programas de JavaScript",
    logo: javascriptLogo,
    projects: [
      {
        name: "PokeDex",
        description: "Esta Pokedex con React y la PokeAPI es una excelente manera de aprender a interactuar con APIs, gestionar estados en React y crear interfaces de usuario atractivas y funcionales.",
        imageUrl: pokedexImage,
        repoUrl: "https://github.com/Orlando-Esp/pokemon_dex"
      },
      {
        name: "Administrador de Usuarios",
        description: "Este administrador de usuarios en React es una excelente forma de aprender a manejar formularios, gestionar estados complejos, interactuar con APIs y crear una interfaz de usuario eficiente y fácil de usar.",
        imageUrl: usersimage,
        repoUrl: "https://github.com/Orlando-Esp/Administrador_de_usuarios"
      },
      {
        name: "Administrador de Usuarios",
        description: "Este proyecto de ventanas muestra como desplasarse en dos ventanas sin que sea una subpagina",
        imageUrl: ventanaimage,
        repoUrl: "https://github.com/Orlando-Esp/Ventanas"
      },
    ]
  },
  python: {
    title: "Programas de Python",
    logo: pythonLogo,
    projects: [
      {
        name: "Random Forest",
        description: "Un modelo de aprendizaje automático que utiliza múltiples árboles de decisión para mejorar la precisión de las predicciones y reducir el riesgo de sobreajuste. Este enfoque se aplica en diversos campos, como la clasificación y la regresión, ofreciendo resultados robustos y fiables.",
        imageUrl: randomimage,
        repoUrl: "https://github.com/Orlando-Esp/Random_Forest"
      },
      {
        name: "VRP Rutas",
        description: "Se centra en optimizar las rutas de una flota de vehículos para minimizar costos, tiempos de viaje y consumo de combustible, garantizando la entrega eficiente de productos a múltiples destinos. Utiliza algoritmos avanzados para encontrar soluciones óptimas o cercanas a óptimas en la gestión logística.",
        imageUrl: vrpimage,
        repoUrl: "https://github.com/Orlando-Esp/VRP_Rutas"
      },
    ]
  },
  java: {
    title: "Programas de Java",
    logo: javaLogo,
    projects: [
      {
        name: "El Ahorcado",
        description: "Una aplicación interactiva en Java que permite a los usuarios adivinar palabras letra por letra. La interfaz gráfica muestra el progreso del jugador, con cada intento incorrecto representado por una parte del cuerpo del ahorcado, proporcionando una experiencia de usuario entretenida y educativa.",
        imageUrl: ahorcadoimage, 
        repoUrl: "https://github.com/Orlando-Esp/El_Ahorcado"
      },
      {
        name: "Analizador Lexico",
        description: "Es una herramienta en Java que descompone el código fuente en tokens, como palabras clave y operadores, para facilitar la detección de errores sintácticos. Es esencial en la primera etapa del proceso de compilación.",
        imageUrl: analizadorimage,
        repoUrl: "https://github.com/Orlando-Esp/Analizador_Lexico"
      },
    ]
  },
  php: {
    title: "Programas de PHP",
    logo: phpLogo,
    projects: [
      {
        name: "Punto de Venta",
        description: "Permite gestionar ventas, inventarios y clientes de manera eficiente, proporcionando una interfaz amigable para registrar transacciones y generar reportes en tiempo real.",
        imageUrl: puntoventaimage,
        repoUrl: "https://github.com/Orlando-Esp/Punto_Venta"
      },
    ]
  },
  cpp: {
    title: "Programas de C++",
    logo: cppLogo,
    projects: [
      {
        name: "Semaforo Doble",
        description: "Simula el funcionamiento de dos semáforos coordinados para controlar el tráfico en una intersección, utilizando algoritmos para gestionar los tiempos de cambio de luces y mejorar la fluidez vehicular.",
        imageUrl: semaforoimage,
        repoUrl: "https://github.com/Orlando-Esp/Semaforo_Doble"
      },
      {
        name: "Llenado de tanque",
        description: "El llenado de un recipiente automatiza el control del nivel de líquido utilizando sensores y actuadores, asegurando un llenado preciso y eficiente según los parámetros predefinidos.",
        imageUrl: llenadoimage,
        repoUrl: "https://github.com/Orlando-Esp/Llenado_Tanque"
      },
    ]
  },
};

function LanguagePage() {
  const { language } = useParams();
  const data = languageData[language];

  if (!data) {
    return <div>Aun no se tienen proyectos de este lenguaje</div>;
  }

  return (
    <div className="my-12 p-8 bg-secondary text-light rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img src={data.logo} alt={`${data.title} logo`} className="w-10 h-10 mr-4" />
        <h2 className="text-3xl font-bold">{data.title}</h2>
      </div>
      <div className="space-y-8">
        {data.projects.map((project, index) => (
          <div key={index} className="bg-primary p-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <p className="mb-4">{project.description}</p>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-white p-2 rounded-full shadow-lg hover:shadow-2xl transition">
              <img src={githubLogo} alt="GitHub Logo" className="w-12 h-12" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguagePage;
