import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { EditorContextType, Theme } from '../types';
import { INITIAL_OPEN_FILES } from '../constants';

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeFileId, setActiveFileId] = useState<string | null>(INITIAL_OPEN_FILES[0]);
  const [openFiles, setOpenFiles] = useState<string[]>(INITIAL_OPEN_FILES);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [terminalVisible, setTerminalVisible] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState(window.innerWidth < 768 ? 180 : 250);
  const [terminalHeight, setTerminalHeight] = useState(200);
  const [theme, setTheme] = useState<Theme>('dark');

  // Mobile Detection
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarVisible(false);
        setTerminalVisible(false);
      } else {
        setSidebarVisible(true);
        setTerminalVisible(true);
      }
    };

    // Set initial state
    if (window.innerWidth < 768) {
      setSidebarVisible(false);
      setTerminalVisible(false);
    }

  }, []);

  // Apply theme class to body
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const openFile = (fileId: string) => {
    if (!openFiles.includes(fileId)) {
      setOpenFiles([...openFiles, fileId]);
    }
    setActiveFileId(fileId);
  };

  const closeFile = (fileId: string) => {
    const newOpenFiles = openFiles.filter((id) => id !== fileId);
    setOpenFiles(newOpenFiles);

    if (activeFileId === fileId) {
      if (newOpenFiles.length > 0) {
        // Activate the last opened file
        setActiveFileId(newOpenFiles[newOpenFiles.length - 1]);
      } else {
        setActiveFileId(null);
      }
    }
  };

  const toggleSidebar = () => setSidebarVisible(!sidebarVisible);
  const toggleTerminal = () => setTerminalVisible(!terminalVisible);

  return (
    <EditorContext.Provider
      value={{
        activeFileId,
        openFiles,
        sidebarVisible,
        terminalVisible,
        sidebarWidth,
        terminalHeight,
        theme,
        openFile,
        closeFile,
        toggleSidebar,
        toggleTerminal,
        setActiveFile: setActiveFileId,
        setSidebarWidth,
        setTerminalHeight,
        toggleTheme,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};
