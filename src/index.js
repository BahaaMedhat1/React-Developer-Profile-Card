import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <main>
      <div className="card">
        <Avatar />
        <div className="profile-info">
          <Intro />
          <SkillList />
        </div>
      </div>
    </main>
  );
}

function Avatar() {
  return (
    <picture>
      <img src="images/avatar1.jpg" />
    </picture>
  );
}

function Intro() {
  return (
    <div className="profile-bio">
      <h1> Bahaa Wanas</h1>
      <p>
        Front-end developer passionate about building clean and responsive web
        interfaces. I enjoy turning designs into functional websites and
        continuously learning new technologies.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillObj) => (
        <Skill
          skill={skillObj.skill}
          level={skillObj.level}
          bgColor={skillObj.color}
        />
      ))}
    </div>
  );
}

function Skill({ bgColor, skill, level }) {
  return (
    <div className="skill" style={{ backgroundColor: bgColor }}>
      <span>{skill} </span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "🐣"}
      </span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
