import { ReactNode } from 'react';

export enum FileType {
  FILE = 'FILE',
  FOLDER = 'FOLDER',
}

export interface FileNode {
  id: string;
  name: string;
  type: FileType;
  children?: FileNode[];
  content?: ReactNode; // The component to render when opened
  language?: string; // For syntax highlighting hints or icon selection
  isOpen?: boolean;
}

export interface Tab {
  id: string;
  name: string;
  icon?: string;
}

export type Theme = 'dark' | 'light';

export interface EditorContextType {
  activeFileId: string | null;
  openFiles: string[];
  sidebarVisible: boolean;
  terminalVisible: boolean;
  sidebarWidth: number;
  terminalHeight: number;
  theme: Theme;
  openFile: (fileId: string) => void;
  closeFile: (fileId: string) => void;
  toggleSidebar: () => void;
  toggleTerminal: () => void;
  setActiveFile: (fileId: string) => void;
  setSidebarWidth: (width: number) => void;
  setTerminalHeight: (height: number) => void;
  toggleTheme: () => void;
}
