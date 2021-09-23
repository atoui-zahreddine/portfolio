import React, { useContext, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Project from './Project';
import Filter from './Filter/Filter';

const categories = [
  { name: 'Front End', id: 1 },
  { name: 'Back End', id: 2 },
  { name: 'Problem Solving', id: 3 },
  { name: 'Other', id: 4 },
];

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [selectedCategory, setSelectedCategory] = useState(1);

  const filteredProjects = projects.filter(({ category }) => category === selectedCategory);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            selectCategory={setSelectedCategory}
          />
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => <Project key={project.id} project={project} />)
          ) : (
            <Row className="justify-content-center">
              <p>No Projects</p>
            </Row>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
