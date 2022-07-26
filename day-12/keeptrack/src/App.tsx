import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state';
// import logo from './logo.svg';
import './App.css';
import ProjectsPage from './Projects/ProjectsPage';
// import ProjectsPage from './Projects/ProjectPage';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
 import HomePage from './home/HomePage';
 import ProjectPage from './Projects/ProjectsPage';

function App() {
  <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <NavLink to="/"  className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/projects" className="button rounded">
          Projects
        </NavLink>
      </header>
  // return (
  //   <div className="App">
  //     <blockquote>
  //     Tell me and I forget, teach me and I may remember, involve me and I learn.
  //     </blockquote>
  //   </div>
  // );
  // return (
  //      <div className="container">
  //        <ProjectsPage></ProjectsPage>
  //      </div>
  //     )
  return (
    <Provider store={store}>
        <Router>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectPage />} />
            </Routes>
          </div>
        </Router>
        </Provider>
      );
}

export default App;
