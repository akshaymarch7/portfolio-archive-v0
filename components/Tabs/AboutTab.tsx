import React from 'react';
import { Seo } from '../SEO/Seo';

export const AboutTab: React.FC = () => {
  return (
    <div className="p-8 h-full overflow-y-auto font-sans max-w-4xl">
      <Seo
        title="About Me - Akshay Saini"
        description="Learn more about Akshay Saini, a software engineer and educator based in India."
      />
      <h1 className="text-3xl font-bold mb-4 pb-2 border-b border-vscode-activity text-vscode-text">README.md</h1>

      <div className="space-y-6 text-vscode-text">
        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">## About Me</h2>
          <p className="leading-7">
            Hi, I'm Akshay Saini. I am a software engineer and educator based in Dehradun, Uttarakhand, India.
            I have a deep passion for Software Engineer.
            I've worked with companies like Uber and PayTM, building scalable products from millions of users.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">## What I Do</h2>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>🔗 Building <a href="https://namastedev.com" target="_blank" rel="noreferrer" className="text-vscode-accent font-bold hover:underline">NamasteDev.com</a></li>
            <li>🚀 Create educational content on YouTube</li>
            <li>💻 Speak at tech conferences</li>
            <li>👨‍💻 Mentor aspiring developers</li>
            <li>🌐 Build high-performance web applications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">## Tech Stack</h2>
          <div className="font-mono text-sm bg-vscode-sidebar p-4 rounded-md border border-vscode-activity">
            <div><span className="text-vscode-keyword">Frontend</span>: [React, Next.js, Tailwind, Redux]</div>
            <div><span className="text-vscode-keyword">Backend</span>: [Node.js, Express, System Design]</div>
            <div><span className="text-vscode-keyword">Tools</span>: [Git, Webpack, VS Code]</div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-vscode-keyword mb-2">## Promotions and Collaborations</h2>
          For promotions, collaborations and inviting me for events/talks,<br></br>
          please reach out to me on <a href="mailto:akshaysaini.in@gmail.com" target="_blank" rel="noreferrer" className="text-vscode-accent font-bold hover:underline">akshaysaini.in@gmail.com</a>
        </section>

      </div>
    </div>
  );
};
