import React, { useState } from "react";

const Skills = () => {
  const _skills = [
    {
      id: 1,
      name: "JavaScript",
      score: "45.37",
    },
    {
      id: 2,
      name: "PHP",
      score: "15.21",
    },
    {
      id: 3,
      name: "Database",
      score: "13.45",
    },
    {
      id: 4,
      name: "API Development",
      score: "17.39",
    },
    {
      id: 5,
      name: "JSON",
      score: "7.26",
    },
    {
      id: 6,
      name: "Other",
      score: "1.32",
    },
  ];

  const [skills, setSkills] = useState(_skills);

  return (
    <section>
      <h5>
        <span className="hash-tag">#</span> Skills:
      </h5>
      <ul>
        {skills &&
          skills.map((skill) => (
            <li key={skill.id}>
              {skill.name} ({skill.score}%)
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Skills;
