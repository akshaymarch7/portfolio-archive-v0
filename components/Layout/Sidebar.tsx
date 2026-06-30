import React, { useState } from 'react';
import { ChevronRight, ChevronDown, FileCode, FileJson, FileType as FileIcon, Folder, FolderOpen, Hash } from 'lucide-react';
import { useEditor } from '../../context/EditorContext';
import { FILE_SYSTEM } from '../../constants';
import { FileNode, FileType } from '../../types';

interface FileTreeItemProps {
  node: FileNode;
  level: number;
  onOpenFile: (id: string) => void;
}

const FileTreeItem: React.FC<FileTreeItemProps> = ({ node, level, onOpenFile }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { activeFileId, openFile, setSidebarVisible } = useEditor();

  const handleClick = () => {
    if (node.type === FileType.FILE) {
      openFile(node.id);
      // Auto-close on mobile
      if (window.innerWidth < 768) {
        setSidebarVisible(false);
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  const getIcon = () => {
    if (node.type === FileType.FOLDER) {
      return isOpen ? <FolderOpen size={16} className="text-blue-400" /> : <Folder size={16} className="text-blue-400" />;
    }

    switch (node.language) {
      case 'typescript': return <FileCode size={16} className="text-blue-400" />;
      case 'json': return <FileJson size={16} className="text-yellow-400" />;
      case 'css': return <Hash size={16} className="text-blue-300" />;
      case 'markdown': return <FileIcon size={16} className="text-purple-400" />;
      default: return <FileIcon size={16} className="text-gray-400" />;
    }
  };

  const isActive = activeFileId === node.id;

  return (
    <div>
      <div
        className={`flex items-center py-1 cursor-pointer hover:bg-[#2a2d2e] ${isActive ? 'bg-[#37373d]' : ''}`}
        style={{ paddingLeft: `${level * 12 + 10}px` }}
        onClick={handleClick}
      >
        <span className="mr-1 opacity-70">
          {node.type === FileType.FOLDER && (
            isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />
          )}
          {node.type === FileType.FILE && <div className="w-[14px]" />} {/* Spacer for alignment */}
        </span>
        <span className="mr-2">{getIcon()}</span>
        <span className={`text-sm ${isActive ? 'text-white' : 'text-vscode-text'}`}>{node.name}</span>
      </div>
      {node.type === FileType.FOLDER && isOpen && node.children && (
        <div>
          {node.children.map((child) => (
            <FileTreeItem key={child.id} node={child} level={level + 1} onOpenFile={onOpenFile} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar: React.FC = () => {
  const { sidebarVisible, openFile, sidebarWidth } = useEditor();

  if (!sidebarVisible) return null;

  return (
    <div
      className="bg-vscode-sidebar flex flex-col border-r border-[#1e1e1e] shrink-0"
      style={{ width: sidebarWidth }}
    >
      <div className="h-9 px-4 flex items-center text-xs font-medium tracking-wide uppercase text-gray-400 select-none">
        Explorer
      </div>
      <div className="flex-1 overflow-y-auto">
        {FILE_SYSTEM.map((node) => (
          <FileTreeItem key={node.id} node={node} level={0} onOpenFile={openFile} />
        ))}
      </div>
    </div>
  );
};
