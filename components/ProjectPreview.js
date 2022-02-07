const ProjectPreview = ({ project }) => {
  return (
    <div className='my-2 md:m-2 font-ubuntu w-full'>
      <a href={project.live} rel='noopener noreferrer' target='_blank'>
        <div
          style={{ backgroundImage: `url(${project.img})` }}
          className='h-64 bg-no-repeat bg-center bg-cover rounded-t'
        ></div>
      </a>
      <div className='bg-stone-200 dark:bg-slate-700 p-4 flex flex-col h-56 justify-evenly rounded-b'>
        <h1 className='text-orange-600 uppercase font-bold font-sans text-xl md:text-2xl'>
          {project.name}
        </h1>
        <span>
          <button className='text-sm md:text-lg p-2 font-bold font-ubuntu border-2 bg-orange-600 border-orange-600 rounded hover:bg-transparent hover:text-orange-600'>
            <a href={project.live} rel='noopener noreferrer' target='_blank'>
              Live App
            </a>
          </button>
          <button className='text-sm md:text-lg p-2 font-bold font-ubuntu border-2 text-orange-600 border-orange-600 rounded hover:bg-orange-600 hover:text-stone-200 hover:dark:text-slate-700 ml-4'>
            <a
              // className='bg-stone-400 w-1/3 dark:bg-slate-200 p-2 mr-2 text-sm rounded uppercase'
              href={project.source}
              rel='noopener noreferrer'
              target='_blank'
            >
              Source Code
            </a>
          </button>
        </span>
        <div>
          <h4 className='text-orange-600 font-sans font-bold'>Built with:</h4>
          <div className='flex flex-wrap'>
            {project.tech.map((tech, index) => (
              <span
                className='text-stone-500 dark:text-slate-200 mr-2 text-sm rounded lowercase'
                key={index}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
