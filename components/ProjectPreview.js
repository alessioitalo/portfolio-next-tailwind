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
          <a
            className='bg-stone-400 w-1/3 dark:bg-slate-200 p-2 mr-2 text-sm rounded uppercase'
            href={project.source}
            rel='noopener noreferrer'
            target='_blank'
          >
            Source Code
          </a>
          <a
            className='bg-stone-400 w-1/3 dark:bg-slate-200 p-2 mr-2 text-sm rounded uppercase'
            href={project.live}
            rel='noopener noreferrer'
            target='_blank'
          >
            Live App
          </a>
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
