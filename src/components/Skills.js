import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import htmlIcon from "../assets/img/html-icon.png";
import cssIcon from "../assets/img/663980.png";
import jsIcon from "../assets/img/js-icon.svg";
import reactIcon from "../assets/img/react-icon.png";
import nodeIcon from "../assets/img/node-js.png";
import expressIcon from "../assets/img/express-icon.png";
import tailwindIcon from "../assets/img/Tailwind-img.png";
import bootstrap from "../assets/img/bootstrap.png";
import cIcon from "../assets/img/c-icon.png";
import cppIcon from "../assets/img/cpp-icon.png";
import python from "../assets/img/python.png";
import verilog from "../assets/img/verilog.png";
import latex from "../assets/img/latex.png";
import empty from "../assets/img/empty.jpg";
import numpyIcon from "../assets/img/numpy.png";
import pandas from "../assets/img/pandas.png";
import sklearn from "../assets/img/sk-learn.png";
import tensorflow from "../assets/img/tensorflow.png";
import opencv from "../assets/img/openv.png";
import pytorch from "../assets/img/pytorch.png";
import graph from "../assets/img/graph.png";
import git from "../assets/img/git.png";
import github from "../assets/img/github.png";
import vivado from "../assets/img/vivado.png";
import solidworks from "../assets/img/solidworks.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    {
      title: 'Programming',
      items: [
        { icon: cIcon, title: 'C'},
        { icon: cppIcon, title: 'C++'},
        { icon: python, title: 'Python'},
        { icon: jsIcon, title: 'JavaScript'},
        { icon: verilog, title: 'Verilog'},
        { icon: latex, title: 'LaTeX'},
        { icon: empty, title: ''},
      ],
    },

    {
      title: 'Web Development',
      items: [
        { icon: htmlIcon, title: 'HTML'},
        { icon: cssIcon, title: 'CSS'},
        { icon: jsIcon, title: 'JavaScript'},
        { icon: reactIcon, title: 'React'},
        { icon: nodeIcon, title: 'NodeJS'},
        { icon: expressIcon, title: 'ExpressJS'},
        { icon: tailwindIcon, title: 'TailwindJS'},
        { icon: bootstrap, title: 'Bootstrap'},
      ],
    },

    {
      title: 'Machine Learning',
      items: [
        { icon: numpyIcon, title: 'Numpy'},
        { icon: pandas, title: 'Pandas'},
        { icon: sklearn, title: 'Scikit-Learn'},
        { icon: tensorflow, title: 'Tensorflow'},
        { icon: opencv, title: 'OpenCV'},
        { icon: pytorch, title: 'PyTorch'},
        { icon: graph, title: 'Neural Networks'},
      ],
    },
    
    {
      title: 'Softwares',
      items: [
        { icon: git, title: 'Git'},
        { icon: github, title: 'Github'},
        { icon: vivado, title: 'Vivado'},
        { icon: solidworks, title: 'Solidworks'},
        { icon: empty, title: ''},
        { icon: empty, title: ''},
        { icon: empty, title: ''},
      ],
    },
  ];

  const splitSkillsIntoRows = (skills) => {
    const rows = [];
    let currentRow = [];
    skills.forEach((skill, index) => {
      if (index > 0 && index % 3 === 0) {
        rows.push(currentRow);
        currentRow = [];
      }
      currentRow.push(skill);
    });
    if (currentRow.length > 0) {
      rows.push(currentRow);
    }
    return rows;
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                A collection of skills I've gathered over the years.
                <br />
                Always excited to embrace new challenges and expand my skillset.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {skills.map((segment, segmentIndex) => (
                  <div className="segment" key={segmentIndex}>
                    {splitSkillsIntoRows(segment.items).map((row, rowIndex) => (
                      <Carousel
                        key={rowIndex}
                        responsive={responsive}
                        infinite={true}
                        className="owl-carousel owl-theme skill-slider"
                        arrows={false}
                      >
                        {row.map((skill, skillIndex) => (
                          <div className="item" key={skillIndex}>
                          <img
                            src={skill.icon}
                            alt={skill.title}
                            className="skill-icon"
                            title={skill.title} // Add this line to display the title as a tooltip on hover
                          />
                          </div>
                        ))}
                      </Carousel>
                    ))}
                    <h3>{segment.title}</h3>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
