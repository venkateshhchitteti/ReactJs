import React from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';


function ProjectsPage() {
//   return <h1>Projects</h1>;
return (
       <>
         <h1>Projects</h1>
        {/* <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre> */}
        <ProjectList projects={MOCK_PROJECTS} />
       </>
      );
}

export default ProjectsPage;