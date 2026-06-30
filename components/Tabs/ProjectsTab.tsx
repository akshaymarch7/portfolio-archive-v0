import React from 'react';
import { Seo } from '../SEO/Seo';

const projects = [
  {
    id: 0,
    name: "Namaste JavaScript",
    description: "Deep dive into JS internals. 10M+ views.",
    link: "https://namastedev.com/learn/namaste-javascript",
    tags: ["Education", "JavaScript", "Core"]
  },
  {
    id: 1,
    name: "Namaste React",
    description: "Zero to Hero React JS course.",
    link: "https://namastedev.com/learn/namaste-react",
    tags: ["React", "Frontend", "JavaScript"]
  },
  {
    id: 2,
    name: "Namaste Node",
    description: "Zero to Hero Node JS course.",
    link: "https://namastedev.com/learn/namaste-node",
    tags: ["Node", "Backend", "JavaScript"]
  },
  {
    id: 3,
    name: "Namaste DSA",
    description: "Zero to Hero DSA course.",
    link: "https://namastedev.com/learn/namaste-dsa",
    tags: ["DSA", "Algorithms", "Problem Solving"]
  },
  {
    id: 4,
    name: "Frontend System Design",
    description: "Architecture patterns for large scale apps.",
    link: "https://namastedev.com",
    tags: ["Architecture", "Scalability", "Frontend"]
  }
];

export const ProjectsTab: React.FC = () => {
  return (
    <div className="p-4 h-full overflow-y-auto font-mono text-sm leading-6">
      <Seo
        title="Projects - Akshay Saini"
        description="Check out my projects including Namaste JavaScript, Namaste React, and more."
        keywords={['Projects', 'Namaste JavaScript', 'Namaste React', 'Akshay Saini']}
      />
      <div className="font-mono text-sm overflow-x-auto whitespace-pre-wrap">
        <span className="text-vscode-keyword">const</span> <span className="text-vscode-function">projects</span> = [<span className="text-vscode-text">=</span> <span className="text-vscode-text">[</span>
      </div>

      {projects.map((project, index) => (
        <div key={project.id} className="pl-4 hover:bg-vscode-lineHighlight rounded group transition-colors">
          <span className="text-vscode-bracket">{`{`}</span>
          <div className="pl-4">
            <div>
              <span className="text-vscode-variable">"id"</span>: <span className="text-vscode-number">{project.id}</span>,
            </div>
            <div>
              <span className="text-vscode-variable font-bold">"name"</span>: <span className="text-vscode-string">"{project.name}"</span>,
            </div>
            <div>
              <span className="text-vscode-variable">"description"</span>: <span className="text-vscode-string">"{project.description}"</span>,
            </div>
            <div>
              <span className="text-vscode-variable">"link"</span>: <a href={project.link} target="_blank" rel="noreferrer" className="text-vscode-string underline decoration-vscode-string cursor-pointer">"{project.link}"</a>,
            </div>
            <div>
              <span className="text-vscode-variable">"tags"</span>: <span className="text-vscode-bracket">[</span>
              {project.tags.map((tag, i) => (
                <span key={tag}>
                  <span className="text-vscode-string">"{tag}"</span>{i < project.tags.length - 1 && ","}
                </span>
              ))}
              <span className="text-vscode-bracket">]</span>
            </div>
          </div>
          <span className="text-vscode-bracket">{`}`}{index < projects.length - 1 && ","}</span>
        </div>
      ))}

      <div><span className="text-vscode-text">];</span></div>

      <div className="mt-8 text-vscode-comment">
        {`// TODO: Create more awesome things...`}
      </div>
    </div>
  );
};
