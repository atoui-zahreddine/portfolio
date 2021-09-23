import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import PropType from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import ProjectImg from '../Image/ProjectImg';

const Project = ({ project: { title, info, info2, url, repo, img, id } }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <Row key={id} className="align-items-md-center">
      <Col lg={4} sm={12}>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
            <div>
              <p>
                {info ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
              </p>
              <p className="mb-4">{info2 || ''}</p>
            </div>
            {url && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--hero"
                href={url}
              >
                See Live
              </a>
            )}

            {repo && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn text-color-main"
                href={repo}
              >
                Source Code
              </a>
            )}
          </div>
        </Fade>
      </Col>
      <Col lg={6} sm={8}>
        <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div className="project-wrapper__image">
            {url ? (
              <a href={url} target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                <Tilt
                  options={{
                    reverse: false,
                    max: 8,
                    perspective: 1000,
                    scale: 1,
                    speed: 300,
                    transition: true,
                    axis: null,
                    reset: true,
                    easing: 'cubic-bezier(.03,.98,.52,.99)',
                  }}
                >
                  <div data-tilt className="thumbnail rounded">
                    <ProjectImg alt={title} filename={img} />
                  </div>
                </Tilt>
              </a>
            ) : (
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
              >
                <div data-tilt className="thumbnail rounded">
                  <ProjectImg alt={title} filename={img} />
                </div>
              </Tilt>
            )}
          </div>
        </Fade>
      </Col>
    </Row>
  );
};

Project.propTypes = {
  project: PropType.shape({
    title: PropType.string,
    info: PropType.string,
    info2: PropType.string,
    url: PropType.string,
    repo: PropType.string,
    img: PropType.string,
    id: PropType.string,
    category: PropType.number,
  }),
};

export default Project;
