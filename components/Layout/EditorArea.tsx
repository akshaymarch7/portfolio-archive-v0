import React from 'react';
import { X, FileCode, FileJson, FileType, Hash } from 'lucide-react';
import { useEditor } from '../../context/EditorContext';
import { FILE_SYSTEM } from '../../constants';
import { FileNode } from '../../types';

// Recursively find file by ID
const findFileById = (nodes: FileNode[], id: string): FileNode | undefined => {
  for (const node of nodes) {
    if (node.id === id) return node;
    if (node.children) {
      const found = findFileById(node.children, id);
      if (found) return found;
    }
  }
  return undefined;
};

const TabIcon = ({ language }: { language?: string }) => {
    switch (language) {
        case 'typescript': return <FileCode size={14} className="text-blue-400 mr-2" />;
        case 'json': return <FileJson size={14} className="text-yellow-400 mr-2" />;
        case 'css': return <Hash size={14} className="text-blue-300 mr-2" />;
        case 'markdown': return <FileType size={14} className="text-purple-400 mr-2" />;
        default: return <FileType size={14} className="text-gray-400 mr-2" />;
    }
}

export const EditorArea: React.FC = () => {
  const { openFiles, activeFileId, closeFile, setActiveFile } = useEditor();

  const activeFileNode = activeFileId ? findFileById(FILE_SYSTEM, activeFileId) : null;

  if (openFiles.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-vscode-bg text-gray-500">
        <div className="text-center">
            <div className="mb-4 text-8xl opacity-10">🚀</div>
            <p className="mb-2">Show All Commands <span className="bg-[#333] px-2 py-0.5 rounded text-xs">Ctrl+Shift+P</span></p>
            <p className="mb-2">Go to File <span className="bg-[#333] px-2 py-0.5 rounded text-xs">Ctrl+P</span></p>
            <p className="mb-2">Find in Files <span className="bg-[#333] px-2 py-0.5 rounded text-xs">Ctrl+Shift+F</span></p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-vscode-bg overflow-hidden relative">
      {/* Tabs Header */}
      <div className="flex bg-[#252526] overflow-x-auto no-scrollbar">
        {openFiles.map((fileId) => {
          const file = findFileById(FILE_SYSTEM, fileId);
          if (!file) return null;
          
          const isActive = activeFileId === fileId;
          
          return (
            <div
              key={fileId}
              onClick={() => setActiveFile(fileId)}
              className={`
                group flex items-center min-w-[120px] max-w-[200px] h-9 px-3 border-r border-[#1e1e1e] cursor-pointer select-none
                ${isActive ? 'bg-vscode-bg text-white border-t-2 border-t-vscode-accent' : 'bg-[#2d2d2d] text-gray-400 hover:bg-[#2a2d2e]'}
              `}
            >
              <TabIcon language={file.language} />
              <span className="text-xs truncate flex-1">{file.name}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeFile(fileId);
                }}
                className={`ml-2 p-0.5 rounded-sm hover:bg-gray-600 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              >
                <X size={12} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Breadcrumbs (Fake) */}
      <div className="h-6 flex items-center px-4 text-xs text-gray-500 bg-vscode-bg shadow-sm">
        <span>src</span>
        <span className="mx-1">{'>'}</span>
        <span>{activeFileNode?.name || '...'}</span>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto relative">
         <div className="absolute inset-0">
             {activeFileNode?.content}
         </div>
      </div>
    </div>
  );
};
