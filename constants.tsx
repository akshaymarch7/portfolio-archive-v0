import React from 'react';
import { FileNode, FileType } from './types';
import { HomeTab } from './components/Tabs/HomeTab';
import { AboutTab } from './components/Tabs/AboutTab';
import { ProjectsTab } from './components/Tabs/ProjectsTab';
import { ContactTab } from './components/Tabs/ContactTab';
import { VideosTab } from './components/Tabs/VideosTab';

export const FILE_SYSTEM: FileNode[] = [
  {
    id: 'root',
    name: 'Akshay_Portfolio',
    type: FileType.FOLDER,
    children: [
      {
        id: 'src',
        name: 'src',
        type: FileType.FOLDER,
        children: [
          {
            id: 'components',
            name: 'components',
            type: FileType.FOLDER,
            children: [
              {
                id: 'home',
                name: 'Home.tsx',
                type: FileType.FILE,
                language: 'typescript',
                content: <HomeTab />,
              },
              {
                id: 'videos',
                name: 'Videos.tsx',
                type: FileType.FILE,
                language: 'typescript',
                content: <VideosTab />,
              },
            ],
          },
          {
            id: 'pages',
            name: 'pages',
            type: FileType.FOLDER,
            children: [
              {
                id: 'about',
                name: 'About.md',
                type: FileType.FILE,
                language: 'markdown',
                content: <AboutTab />,
              },
            ],
          },
        ],
      },
      {
        id: 'data',
        name: 'data',
        type: FileType.FOLDER,
        children: [
          {
            id: 'projects',
            name: 'projects.json',
            type: FileType.FILE,
            language: 'json',
            content: <ProjectsTab />,
          },
        ],
      },
      {
        id: 'styles',
        name: 'styles',
        type: FileType.FOLDER,
        children: [
          {
            id: 'contact',
            name: 'contact.css',
            type: FileType.FILE,
            language: 'css',
            content: <ContactTab />,
          },
        ],
      },
      {
        id: 'readme',
        name: 'README.md',
        type: FileType.FILE,
        language: 'markdown',
        content: <AboutTab />,
      },
      {
        id: 'package',
        name: 'package.json',
        type: FileType.FILE,
        language: 'json',
        content: (
          <div className="p-6 font-mono text-sm">
            <span className="text-vscode-text">{`{`}</span>
            <div className="pl-4">
              <span className="text-vscode-string">"name"</span>: <span className="text-vscode-string">"namaste-akshay"</span>,<br />
              <span className="text-vscode-string">"version"</span>: <span className="text-vscode-string">"1.0.0"</span>,<br />
              <span className="text-vscode-string">"description"</span>: <span className="text-vscode-string">"Teacher. Engineer. YouTuber."</span>,<br />
              <span className="text-vscode-string">"scripts"</span>: {`{`}<br />
              <div className="pl-4">
                 <span className="text-vscode-string">"teach"</span>: <span className="text-vscode-string">"node namaste-js.js"</span>,<br />
                 <span className="text-vscode-string">"code"</span>: <span className="text-vscode-string">"react start"</span>
              </div>
              {`}`},<br />
              <span className="text-vscode-string">"dependencies"</span>: {`{`}<br />
              <div className="pl-4">
                <span className="text-vscode-string">"react"</span>: <span className="text-vscode-string">"^18.2.0"</span>,<br />
                <span className="text-vscode-string">"javascript"</span>: <span className="text-vscode-string">"latest"</span>,<br />
                <span className="text-vscode-string">"passion"</span>: <span className="text-vscode-string">"infinity"</span>
              </div>
              {`}`}
            </div>
            <span className="text-vscode-text">{`}`}</span>
          </div>
        ),
      },
    ],
  },
];

export const INITIAL_OPEN_FILES = ['home'];
