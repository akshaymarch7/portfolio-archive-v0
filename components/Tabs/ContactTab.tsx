import React from 'react';
import { Seo } from '../SEO/Seo';

export const ContactTab: React.FC = () => {
  return (
    <div className="p-4 h-full overflow-y-auto font-mono text-sm leading-6">
      <Seo
        title="Contact Me - Akshay Saini"
        description="Get in touch with Akshay Saini, Software Engineer and Educator."
        keywords={['Contact', 'Akshay Saini', 'Email', 'Social Media']}
      />
      <div className="text-vscode-comment mb-4">/* Reach out to me anytime! */</div>

      <div className="hover:bg-vscode-lineHighlight p-1 rounded">
        <span className="text-vscode-keyword">.social-links</span> <span className="text-vscode-text">{`{`}</span>
        <div className="pl-4">
          <div className="flex items-center group">
            <span className="text-vscode-variable">email</span>: <span className="text-vscode-string">"akshay@namaste.dev"</span>;
            <span className="ml-4 opacity-0 group-hover:opacity-50 text-xs text-gray-500 cursor-pointer">Send Email</span>
          </div>
          <div className="flex items-center group">
            <span className="text-vscode-variable">linkedin</span>: <a href="https://linkedin.com/in/akshaymarch7" target="_blank" rel="noreferrer" className="text-vscode-accent hover:underline">url("linkedin.com/in/akshaymarch7")</a>;
          </div>
          <div className="flex items-center group">
            <span className="text-vscode-variable">twitter</span>: <a href="https://twitter.com/akshaymarch7" target="_blank" rel="noreferrer" className="text-vscode-accent hover:underline">url("@akshaymarch7")</a>;
          </div>
          <div className="flex items-center group">
            <span className="text-vscode-variable">instagram</span>: <a href="#" className="text-vscode-accent hover:underline">url("@akshay_saini")</a>;
          </div>
        </div>
        <span className="text-vscode-text">{`}`}</span>
      </div>

      <div className="hover:bg-vscode-lineHighlight p-1 rounded mt-4">
        <span className="text-vscode-keyword">#location</span> <span className="text-vscode-text">{`{`}</span>
        <div className="pl-4">
          <div><span className="text-vscode-variable">city</span>: <span className="text-vscode-string">"Dehradun"</span>;</div>
          <div><span className="text-vscode-variable">country</span>: <span className="text-vscode-string">"India"</span>;</div>
        </div>
        <span className="text-vscode-text">{`}`}</span>
      </div>

      <div className="mt-8">
        <a
          href="mailto:akshay@namaste.dev"
          className="bg-vscode-button text-vscode-buttonFg px-4 py-2 hover:bg-opacity-90 transition-colors font-sans rounded-sm text-xs inline-block"
        >
          Send Message
        </a>
      </div>
    </div>
  );
};
