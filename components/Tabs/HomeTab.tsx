import React from 'react';
import { Seo } from '../SEO/Seo';
import { useEditor } from '../../context/EditorContext';

export const HomeTab: React.FC = () => {
  const { openFile } = useEditor();

  return (
    <div className="p-8 h-full overflow-y-auto bg-vscode-bg text-vscode-text font-sans selection:bg-vscode-selection">
      <Seo
        title="Home - Akshay Saini"
        description="Akshay Saini - Software Engineer, Educator, and Creator of Namaste JavaScript."
        keywords={['Akshay Saini', 'Namaste JavaScript', 'Software Engineer', 'Educator']}
      />
      <div className="max-w-3xl mx-auto mt-10">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-vscode-text tracking-tight">
              Hello, I'm <span className="text-vscode-accent">Akshay Saini</span>
            </h1>
          </div>
        </div>

        <div className="font-mono text-sm mb-8 bg-vscode-sidebar p-4 border border-vscode-activity rounded-md inline-block">
          <span className="text-vscode-keyword">const</span> <span className="text-vscode-function">developer</span> = {`{`}
          <div className="pl-4">
            name: <span className="text-vscode-string">'Akshay Saini'</span>,<br />
            location: <span className="text-vscode-string">'Dehradun, India'</span>,<br />
            bio: <span className="text-vscode-string">'Engineer by profession, teacher by heart ❤️'</span>,<br />
            mission: <span className="text-vscode-string">'To make my students fall in love with engineering!'</span>
          </div>
          {`};`}
        </div>

        <p className="text-lg leading-relaxed mb-6">
          I teach JavaScript , React, Node, DSA and System Design to hundreds of thousands of developers worldwide.
          Creator of <strong className="text-vscode-text font-bold">Namaste JavaScript</strong> and formerly at Uber & PayTM.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button
            onClick={() => openFile('projects')}
            className="px-6 py-3 bg-vscode-button text-vscode-buttonFg rounded hover:bg-opacity-90 transition-colors font-medium"
          >
            View Projects
          </button>
          <button
            onClick={() => openFile('contact')}
            className="px-6 py-3 border border-vscode-button text-vscode-button rounded hover:bg-vscode-button hover:text-vscode-buttonFg transition-colors font-medium"
          >
            Contact Me
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-vscode-activity">
          <h3 className="text-sm uppercase tracking-wider text-vscode-text opacity-70 mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono text-vscode-keyword cursor-pointer">
            <span onClick={() => openFile('about')} className="hover:underline">About.md</span>
            <span onClick={() => openFile('projects')} className="hover:underline">Projects.json</span>
            <span onClick={() => openFile('videos')} className="hover:underline">Videos.tsx</span>
            <span onClick={() => openFile('contact')} className="hover:underline">Contact.css</span>
          </div>
        </div>
      </div>
    </div>
  );
};
