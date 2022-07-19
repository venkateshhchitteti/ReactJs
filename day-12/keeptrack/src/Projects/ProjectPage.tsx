import { MOCK_PROJECTS } from './Mockprojects';

function ProjectsPage() {
    // return <h1>Projects</h1>
    return (
        <div>
            <h1>Projects</h1>
            <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
        </div>
    );
}

export default ProjectsPage;