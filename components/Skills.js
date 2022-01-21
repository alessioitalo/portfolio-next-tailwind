import {
  FaHtml5,
  FaCss3,
  FaPython,
  FaReact,
  FaGitAlt,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiStyledcomponents,
  SiVisualstudiocode,
  SiMongodb,
  SiTestinglibrary,
  SiFirebase,
} from 'react-icons/si';

const Skills = () => {
  return (
    <div className='grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3 gap-4'>
      <div className='flex flex-col justify-center items-center'>
        <FaHtml5 size={30} />
        <span className='text-xs md:text-lg'>HTML</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FaCss3 size={30} />
        <span className='text-xs md:text-lg'>CSS</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiJavascript size={30} />
        <span className='text-xs md:text-lg'>JavaScript</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiTypescript size={30} />
        <span className='text-xs md:text-lg'>TypeScript</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FaPython size={30} />
        <span className='text-xs md:text-lg'>Python</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FaGitAlt size={30} />
        <span className='text-xs md:text-lg'>Git</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FaReact size={30} />
        <span className='text-xs md:text-lg'>React</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiRedux size={30} />
        <span className='text-xs md:text-lg'>Redux</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiTestinglibrary size={30} />
        <span className='text-xs md:text-lg'>React Testing Library</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FaBootstrap size={30} />
        <span className='text-xs md:text-lg'>Bootstrap</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiTailwindcss size={30} />
        <span className='text-xs md:text-lg'>Tailwind CSS</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiStyledcomponents size={30} />
        <span className='text-xs md:text-lg'>Styled Components</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiFirebase size={30} />
        <span className='text-xs md:text-lg'>Firebase</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiMongodb size={30} />
        <span className='text-xs md:text-lg'>MongoDB</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiVisualstudiocode size={30} />
        <span className='text-xs md:text-lg'>VS Code</span>
      </div>
    </div>
  );
};

export default Skills;
