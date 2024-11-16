import React from "react";
import BasicPage from '../../global/components/BasicPage';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './Projects.css';
import ProjectsShowcase from "./ProjectsShowcase";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function Projects() {
  return (
    <div>
      <BasicPage>
        <section id='projects'>
          <ProjectsShowcase/>
        </section>
      </BasicPage>
    </div>
  );
}

export default Projects;