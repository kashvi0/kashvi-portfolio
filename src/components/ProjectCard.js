import React from 'react';
import { Col } from 'react-bootstrap';
import githubLogo from '../assets/img/github.png';

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  const descriptionLines = description.split('\n'); 
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          {descriptionLines.map((line) => (
            <div><span>{line}</span> 
          <br /></div>
          
        ))}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
              <img src={githubLogo} alt="GitHub" />
            </a>
          )}
        </div>
      </div>
    </Col>
  );
};