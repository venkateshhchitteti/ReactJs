import React from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
import { Project } from './Project';
import  { Fragment, useState } from 'react';


function ProjectsPage() {
  //   return <h1>Projects</h1>;
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const saveProject = (project: Project) => {
    // console.log('Saving project: ', project);
  };
  return (
    <>
      <h1>Projects</h1>
      {/* <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre> */}
      {/* <ProjectList onSave={saveProject} projects={MOCK_PROJECTS} /> */}
      <ProjectList onSave={saveProject} projects={projects} />
    </>
  );
}

export default ProjectsPage;