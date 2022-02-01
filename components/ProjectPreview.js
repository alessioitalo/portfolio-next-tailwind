const ProjectPreview = ({ project }) => {
  return (
    <div className='my-2 md:m-2 font-ubuntu w-full'>
      <div
        style={{ backgroundImage: `url(${project.img})` }}
        className='h-64 bg-no-repeat bg-center bg-cover'
      ></div>
      <div className='bg-stone-200 dark:bg-slate-700 p-4 flex flex-col h-56 justify-evenly'>
        <h1 className='text-slate-400 text-2xl'>{project.name}</h1>
        <span>
          <a
            className='bg-stone-400 w-1/3 dark:bg-slate-200 p-1 mr-2 text-sm rounded uppercase'
            href={project.source}
          >
            Source Code
          </a>
          <a
            className='bg-stone-400 w-1/3 dark:bg-slate-200 p-1 mr-2 text-sm rounded uppercase'
            href={project.live}
          >
            Live App
          </a>
        </span>
        <h4 className='text-slate-400 text-lg'>Built with:</h4>
        <div className='flex flex-wrap'>
          {project.tech.map((tech, index) => (
            <span
              className='bg-stone-400 dark:bg-slate-200 p-1 mt-2 mr-2 text-sm rounded uppercase'
              key={index}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
