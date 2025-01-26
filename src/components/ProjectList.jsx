import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ activeFilter }) => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await fetch(
            "https://projects-database-d25a17e83152.herokuapp.com/api/projects/"
          );
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          
          // Add a boolean flag for each project
          const projectsWithFlag = data.map(project => ({
            ...project,
            // If affiliation is null or empty, isProfessional is false
            // Otherwise, it's true
            isProfessional: project.affiliation && project.affiliation.trim() !== ''
          }));
          
          setProjects(projectsWithFlag);
          setLoading(false);
        } catch (error) {
          console.error("Fetch error:", error);
          setError(error.message);
          setLoading(false);
        }
      };
  
      fetchProjects();
    }, []);
  
    useEffect(() => {
      let filtered = projects;
  
      // Filter based on the active pill and the isProfessional flag
      if (activeFilter !== "All") {
        filtered = projects.filter((project) => {
          // For "Professional" filter, show only projects with affiliation
          // For "Hobby" filter, show only projects without affiliation
          return activeFilter === "Professional" 
            ? project.isProfessional 
            : !project.isProfessional;
        });
      }
  
      setFilteredProjects(filtered);
    }, [activeFilter, projects]);
  
    // Loading and error states
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    // No projects found state
    if (filteredProjects.length === 0) {
      return (
        <div className="text-center text-gray-500 py-8">
          No projects found matching the selected filter.
        </div>
      );
    }
  
    // Render projects
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    );
  };

export default ProjectList;