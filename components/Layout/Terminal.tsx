import React, { useState, useRef, useEffect } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';
import { useEditor } from '../../context/EditorContext';

// macOS style login
const LOGIN_TIME = new Date().toDateString();
const WELCOME_MESSAGE = [
  `Last login: ${LOGIN_TIME} on ttys000`,
  "akshaysaini@macbook-pro portfolio-ide % npm start",
  "",
  "> namaste-akshay@1.0.0 start",
  "> react-scripts start",
  "",
  "Starting the development server...",
  "",
  "Compiled successfully!",
  "You can now view namaste-akshay in the browser.",
  "",
  "  Local:            http://localhost:3000",
  "  On Your Network:  http://192.168.1.5:3000",
  "",
  "Note that the development build is not optimized.",
  "To create a production build, use npm run build.",
  "",
];

export const Terminal: React.FC = () => {
  const { terminalVisible, toggleTerminal, terminalHeight } = useEditor();
  const [history, setHistory] = useState<string[]>(WELCOME_MESSAGE);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalVisible && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, terminalVisible]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: string[] = [];

    // Prompt for history
    const prompt = "akshaysaini@macbook-pro portfolio-ide %";

    switch (trimmed) {
      case 'help':
        response = [
          "Available commands:",
          "  help     - Show this help message",
          "  clear    - Clear terminal history",
          "  whoami   - Display current user",
          "  ls       - List files",
          "  pwd      - Print working directory"
        ];
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'whoami':
        response = ["akshaysaini"];
        break;
      case 'ls':
        response = ["src  public  node_modules  package.json  README.md  tsconfig.json"];
        break;
      case 'pwd':
        response = ["/Users/akshaysaini/Documents/portfolio-ide"];
        break;
      case '':
        break;
      default:
        response = [`zsh: command not found: ${trimmed}`];
    }

    setHistory(prev => [...prev, `${prompt} ${cmd}`, ...response]);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  if (!terminalVisible) return null;

  return (
    <div
      className="border-t border-vscode-activity bg-vscode-panel flex flex-col shrink-0"
      style={{ height: terminalHeight }}
    >
      <div className="flex items-center justify-between px-4 py-2 bg-vscode-sidebar text-xs uppercase tracking-wide border-b border-vscode-activity select-none">
        <div className="flex space-x-6">
          <span className="cursor-pointer border-b border-vscode-text text-vscode-text pb-1">Terminal</span>
          <span className="cursor-pointer text-gray-500 hover:text-vscode-text transition-colors">Output</span>
          <span className="cursor-pointer text-gray-500 hover:text-vscode-text transition-colors">Debug Console</span>
          <span className="cursor-pointer text-gray-500 hover:text-vscode-text transition-colors">Problems</span>
        </div>
        <div className="flex items-center space-x-2 text-vscode-text">
          <ChevronUp size={14} className="cursor-pointer hover:bg-vscode-activity rounded" />
          <X size={14} className="cursor-pointer hover:bg-vscode-activity rounded" onClick={toggleTerminal} />
        </div>
      </div>
      <div className="flex-1 p-2 font-mono text-sm overflow-y-auto overflow-x-hidden bg-vscode-bg text-vscode-text">
        {history.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap leading-tight font-mono">{line}</div>
        ))}
        <div className="flex items-center">
          <span className="mr-2 font-bold text-vscode-accent">akshaysaini@macbook-pro portfolio-ide %</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            className="bg-transparent outline-none flex-1 text-vscode-text font-mono"
            autoFocus
            spellCheck={false}
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
