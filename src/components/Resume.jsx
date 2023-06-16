import React from 'react';
import './Resume.css';

const Resume = ({ title, data }) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
      </div>
      <br />
      <div id="exp">Experience</div>
      <ul>
        {data.experience.map((exp, index) => (
          <ul key={index}>
            <li>Year - {exp.year}</li>
            <li>Company - {exp.company}</li>
            <li>Role - {exp.role}</li>
          </ul>
        ))}
      </ul>

      <br />
      <div id="edu">Education</div>
      <ul>
        {data.education.map((edu, index) => (
          <ul key={index}>
            <li>Graduation Degree - {edu.Graduation}</li>
            <li>College - {edu.college}</li>
            <li>12th - {edu.intermediate}</li>
          </ul>
        ))}
      </ul>

      <br />
      <div id="skill">Skill</div>
      <ul>
        {data.skill.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      {console.log('hello')}
    </>
  );
};

export default Resume;
