// import React, { useEffect, useState } from 'react';
import React, { useEffect } from 'react';
import { projectAPI } from './projectAPI';
import ProjectDetail from './projectDetail';
import { Project } from './Project';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../state';
import { useParams } from 'react-router-dom';
import { loadProjects } from './state/projectActions';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ProjectState } from './state/projectTypes';

function ProjectPage(props: any) {
//     const [projects, setProjects] = useState<Project[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | undefined>(undefined);
//   const [currentPage, setCurrentPage] = useState(1);
const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();
const loading = useSelector(
        (appState: AppState) => appState.projectState.loading
      );
      const projects = useSelector(
        (appState: AppState) => appState.projectState.projects
      );
      const error = useSelector(
        (appState: AppState) => appState.projectState.error
      );
      const currentPage = useSelector(
        (appState: AppState) => appState.projectState.page
      );
      const dispatch = useDispatch<ThunkDispatch<ProjectState, any, AnyAction>>();
    const params = useParams();
    const id = Number(params.id);
    useEffect(() => {
            dispatch(loadProjects(1));
          }, [dispatch]);
          const handleMoreClick = () => {
                setCurrentPage((currentPage) => currentPage + 1);
                dispatch(loadProjects(currentPage + 1));
              };
    // useEffect(() => {
    //     setLoading(true);
    //     projectAPI
    //         .find(id)
    //         .then((data) => {
    //             setProject(data);
    //             setLoading(false);
    //         })
    //         .catch((e) => {
    //             setError(e);
    //             setLoading(false);
    //         });
    // }, [id]);

    return (
        <div>
            <>
                <h1>Project Detail</h1>

                {loading && (
                    <div className="center-page">
                        <span className="spinner primary"></span>
                        <p>Loading...</p>
                    </div>
                )}

                {error && (
                    <div className="row">
                        <div className="card large error">
                            <section>
                                <p>
                                    <span className="icon-alert inverse "></span> {error}
                                </p>
                            </section>
                        </div>
                    </div>
                )}

                {project && <ProjectDetail project={project} />}
            </>
        </div>
    );
}

export default ProjectPage;