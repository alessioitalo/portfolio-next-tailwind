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
    <div className='pt-8 md:pt-20 grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3 md:px-8 lg:px-24 gap-y-12'>
      <div className='flex flex-col justify-center items-center'>
        <FaHtml5 size={30} />
        <span className='text-xs md:text-sm'>HTML</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FaCss3 size={30} />
        <span className='text-xs md:text-sm'>CSS</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiJavascript size={30} />
        <span className='text-xs md:text-sm'>JavaScript</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiTypescript size={30} />
        <span className='text-xs md:text-sm'>TypeScript</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FaPython size={30} />
        <span className='text-xs md:text-sm'>Python</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FaGitAlt size={30} />
        <span className='text-xs md:text-sm'>Git</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FaReact size={30} />
        <span className='text-xs md:text-sm'>React</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiRedux size={30} />
        <span className='text-xs md:text-sm'>Redux</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiTestinglibrary size={30} />
        <span className='text-xs md:text-sm'>React Testing Library</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <FaBootstrap size={30} />
        <span className='text-xs md:text-sm'>Bootstrap</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiTailwindcss size={30} />
        <span className='text-xs md:text-sm'>Tailwind CSS</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiStyledcomponents size={30} />
        <span className='text-xs md:text-sm'>Styled Components</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiFirebase size={30} />
        <span className='text-xs md:text-sm'>Firebase</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiMongodb size={30} />
        <span className='text-xs md:text-sm'>MongoDB</span>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <SiVisualstudiocode size={30} />
        <span className='text-xs md:text-sm'>VS Code</span>
      </div>
    </div>
  );
};

export default Skills;
