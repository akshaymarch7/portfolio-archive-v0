import React from 'react';
import { GitBranch, Radio, Check, Bell, ChevronUp, ChevronDown } from 'lucide-react';
import { useEditor } from '../../context/EditorContext';

export const StatusBar: React.FC = () => {
  const { toggleTerminal, terminalVisible } = useEditor();

  return (
    <div className="h-7 bg-vscode-statusBar text-white flex items-center justify-between px-2 text-xs select-none shrink-0 z-50 border-t border-black/20 shadow-[0_-1px_2px_rgba(0,0,0,0.1)]">
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-1 hover:bg-white/20 px-1 rounded cursor-pointer">
          <GitBranch size={12} />
          <span>main*</span>
        </div>
        <div className="flex items-center space-x-1 hover:bg-white/20 px-1 rounded cursor-pointer">
          <Radio size={12} />
          <span>0 Errors</span>
        </div>

      </div>

      <div className="flex items-center space-x-3">
        <div
          onClick={toggleTerminal}
          className={`flex items-center space-x-1 hover:bg-white/20 px-1 rounded cursor-pointer ${terminalVisible ? 'bg-white/10' : ''}`}
        >
          {terminalVisible ? <ChevronDown size={12} /> : <ChevronUp size={12} />}
          <span className="font-bold">Terminal</span>
        </div>

        <div className="hidden sm:flex items-center space-x-3">
          <div className="flex items-center space-x-1 hover:bg-white/20 px-1 rounded cursor-pointer">
            <span className="hidden sm:inline">Ln 12, Col 42</span>
          </div>
          <div className="flex items-center space-x-1 hover:bg-white/20 px-1 rounded cursor-pointer">
            <span>UTF-8</span>
          </div>
          <div className="flex items-center space-x-1 hover:bg-white/20 px-1 rounded cursor-pointer">
            <span>TypeScript React</span>
          </div>
          <div className="flex items-center space-x-1 hover:bg-white/20 px-1 rounded cursor-pointer">
            <Check size={12} />
            <span>Prettier</span>
          </div>
          <div className="flex items-center space-x-1 hover:bg-white/20 px-1 rounded cursor-pointer">
            <Bell size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};
