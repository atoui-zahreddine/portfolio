import React, { useContext, useState, useMemo, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import Project from './Project';
import Filter from './Filter/Filter';
import Pagination from '../Pagination/Pagination';

const PAGE_SIZE = 3;

const paginate = (filteredProjects, currentPage) => {
  return filteredProjects.slice(
    (currentPage - 1) * PAGE_SIZE,
    filteredProjects.length - (currentPage - 1) * PAGE_SIZE > PAGE_SIZE
      ? (currentPage - 1) * PAGE_SIZE + PAGE_SIZE
      : filteredProjects.length
  );
};

const Projects = () => {
  const { projects, projectsCategories } = useContext(PortfolioContext);

  const [selectedCategory, setSelectedCategory] = useState();
  const [currentPage, setCurrentPage] = useState();

  const filteredProjects = useMemo(
    () => projects.filter(({ category }) => category === selectedCategory),
    [selectedCategory]
  );
  const showedProjects = useMemo(() =>
    paginate(filteredProjects, currentPage, [filteredProjects, currentPage])
  );

  useEffect(() => {
    setSelectedCategory(1);
    setCurrentPage(1);
  }, []);
  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          <Filter
            categories={projectsCategories}
            selectedCategory={selectedCategory}
            selectCategory={setSelectedCategory}
            setCurrentPage={setCurrentPage}
          />
          {filteredProjects.length > 0 ? (
            showedProjects.map((project) => <Project key={project.id} project={project} />)
          ) : (
            <Row className="justify-content-center">
              <p>No Projects</p>
            </Row>
          )}
          <Pagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            itemsCount={filteredProjects.length}
            pageSize={PAGE_SIZE}
          />
        </div>
      </Container>
    </section>
  );
};

export default Projects;
