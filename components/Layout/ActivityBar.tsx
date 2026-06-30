import React, { useState, useRef, useEffect } from 'react';
import { Files, Search, GitGraph, Bug, Box, Settings, User, Moon, Sun } from 'lucide-react';
import { useEditor } from '../../context/EditorContext';

interface IconWrapperProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  bottom?: boolean;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children, active, onClick, bottom = false }) => (
  <div
    onClick={onClick}
    className={`
      w-full h-12 flex items-center justify-center cursor-pointer transition-colors relative
      ${active ? 'text-vscode-iconActive' : 'text-vscode-iconInactive hover:text-vscode-iconActive'}
      ${bottom ? 'mt-auto' : ''}
    `}
  >
    {active && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-vscode-accent" />}
    {children}
  </div>
);

export const ActivityBar: React.FC = () => {
  const { sidebarVisible, toggleSidebar, toggleTheme, theme } = useEditor();
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setShowSettingsMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-12 bg-vscode-activity flex flex-col items-center py-2 z-[110] shrink-0">
      <IconWrapper active={sidebarVisible} onClick={toggleSidebar}>
        <Files size={24} strokeWidth={1.5} />
      </IconWrapper>
      <IconWrapper>
        <Search size={24} strokeWidth={1.5} />
      </IconWrapper>
      <IconWrapper>
        <GitGraph size={24} strokeWidth={1.5} />
      </IconWrapper>
      <IconWrapper>
        <Bug size={24} strokeWidth={1.5} />
      </IconWrapper>
      <IconWrapper>
        <Box size={24} strokeWidth={1.5} />
      </IconWrapper>

      <div className="flex-1" /> {/* Spacer */}

      <IconWrapper>
        <User size={24} strokeWidth={1.5} />
      </IconWrapper>

      <div className="relative w-full" ref={settingsRef}>
        <IconWrapper onClick={() => setShowSettingsMenu(!showSettingsMenu)}>
          <Settings size={24} strokeWidth={1.5} />
        </IconWrapper>

        {showSettingsMenu && (
          <div className="absolute left-10 bottom-2 w-56 bg-vscode-bg border border-vscode-activity shadow-xl rounded-md py-1 z-50 text-vscode-text">
            <div className="px-4 py-2 border-b border-vscode-activity mb-1">
              <span className="text-xs font-semibold opacity-50 uppercase tracking-wider">Settings</span>
            </div>
            <button
              className="w-full text-left px-4 py-2 hover:bg-vscode-activity flex items-center justify-between group"
              onClick={() => { toggleTheme(); setShowSettingsMenu(false); }}
            >
              <span>Color Theme</span>
              <div className="flex items-center text-xs opacity-70 group-hover:opacity-100">
                {theme === 'dark' ? <Moon size={14} className="mr-2" /> : <Sun size={14} className="mr-2" />}
                {theme === 'dark' ? 'Dark' : 'Light'}
              </div>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
