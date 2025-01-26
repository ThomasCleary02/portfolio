const ProjectCard = ({ project }) => {
    const technologies = project.technologies || [];
  
    return (
      <div className="border rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between h-full">
        {/* Project Image - Now more prominent */}
        {project.image_url && (
          <div className="relative overflow-hidden rounded-t-xl">
            <img 
              src={project.image_url} 
              alt={project.title} 
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
  
        {/* Content Container */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Project Header */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            {project.affiliation && (
              <p className={`
                text-xs font-medium mt-1
                ${project.affiliation === 'professional' 
                  ? 'text-blue-800' 
                  : 'text-green-800'
                }
              `}>
                {project.affiliation.charAt(0).toUpperCase() + project.affiliation.slice(1)} Project
              </p>
            )}
          </div>
  
          {/* Description */}
          <p className="text-gray-600 mb-4 text-sm flex-grow">{project.description}</p>
  
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
  
          {/* Links */}
          <div className="flex space-x-4 mt-auto">
            {project.live_demo_url && (
              <a
                href={project.live_demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 transition-colors flex items-center"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  strokeWidth="0"
                >
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Live Demo
              </a>
            )}
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors flex items-center"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  strokeWidth="0"
                >
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

export default ProjectCard;