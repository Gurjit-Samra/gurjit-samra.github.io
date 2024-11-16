import { ProjectsDB } from './ProjectsDB';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Chip } from '@mui/material';

const ProjectsDBShowcase = () => {
  const [selectedTag, setSelectedTag] = useState(null);

  // Get all unique tags
  const allTags = Array.from(new Set(ProjectsDB.flatMap(project => project.tags)));

  // Filtered ProjectsDB based on selected tag
  const filteredProjectsDB = selectedTag
    ? ProjectsDB.filter(project => project.tags.includes(selectedTag))
    : ProjectsDB;

  return (
    <div id="showcase-container">
      <div style={{ marginBottom: 16}} id="tag-container">
        {/* Display all tags as filter options */}
        <Chip
          label="All"
          onClick={() => setSelectedTag(null)}
          variant={selectedTag === null ? "filled" : "outlined"}
          sx={{ marginRight: 0.5 }}
        />
        {allTags.map((tag, index) => (
          <Chip
            key={index}
            label={tag}
            onClick={() => setSelectedTag(tag)}
            variant={selectedTag === tag ? "filled" : "outlined"}
            sx={{ marginRight: 0.5 }}
          />
        ))}
      </div>

      <div id="cards-container">
        {filteredProjectsDB.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsDBShowcase;