import React, { useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { ActivityBar } from './ActivityBar';
import { Sidebar } from './Sidebar';
import { EditorArea } from './EditorArea';
import { StatusBar } from './StatusBar';
import { Terminal } from './Terminal';
import { useEditor } from '../../context/EditorContext';
import { Seo } from '../SEO/Seo';

export const Layout: React.FC = () => {
  const {
    setSidebarWidth, sidebarVisible, setSidebarVisible,
    terminalHeight, setTerminalHeight, terminalVisible,
    toggleTerminal
  } = useEditor();

  // Keyboard Shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if Meta (Mac) or Ctrl (Windows) is pressed
      const isMeta = e.metaKey || e.ctrlKey;

      if (isMeta && e.key === 'k') {
        e.preventDefault();
        alert("🔍 Searching for inspiration... (This is a fake search bar!)");
      }

      if (isMeta && e.key === 'p') {
        e.preventDefault();
        alert("📂 Opening all the files... (Just kidding, use the explorer!)");
      }

      if (isMeta && e.key === 's') {
        e.preventDefault();
        alert("❤️ Saved to local storage (in your heart)!");
      }

      // Alt + T to toggle terminal
      if (e.altKey && e.key === 't') {
        e.preventDefault();
        toggleTerminal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTerminal]);

  const startResizingSidebar = useCallback(() => {
    const onMouseMove = (e: MouseEvent) => {
      // 48 is the ActivityBar width (w-12)
      let newWidth = e.clientX - 48;
      // Constraints
      if (newWidth < 150) newWidth = 150;
      if (newWidth > 600) newWidth = 600;
      setSidebarWidth(newWidth);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'default';
      // Remove any text selection that might have happened
      document.body.style.userSelect = 'auto';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, [setSidebarWidth]);

  // Touch support for resizing
  const startResizingSidebarTouch = useCallback((touchStartEvent: React.TouchEvent) => {
    const startX = touchStartEvent.touches[0].clientX;
    const startWidth = sidebarVisible ? 250 : 0; // approximation if needed, but we rely on current state elsewhere

    const onTouchMove = (e: TouchEvent) => {
      // 48 is ActivityBar
      let newWidth = e.touches[0].clientX - 48;
      if (newWidth < 150) newWidth = 150;
      if (newWidth > window.innerWidth - 50) newWidth = window.innerWidth - 50;
      setSidebarWidth(newWidth);
    };

    const onTouchEnd = () => {
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
      document.body.style.userSelect = 'auto';
    };

    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
    document.body.style.userSelect = 'none';
  }, [setSidebarWidth]);

  const startResizingTerminal = useCallback((mouseDownEvent: React.MouseEvent) => {
    const startY = mouseDownEvent.clientY;
    const startHeight = terminalHeight;

    const onMouseMove = (e: MouseEvent) => {
      const delta = startY - e.clientY;
      let newHeight = startHeight + delta;

      // Constraints
      if (newHeight < 100) newHeight = 100;
      if (newHeight > window.innerHeight - 200) newHeight = window.innerHeight - 200;

      setTerminalHeight(newHeight);
    };

    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.body.style.cursor = 'row-resize';
    document.body.style.userSelect = 'none';
  }, [terminalHeight, setTerminalHeight]);

  return (
    <div className="flex flex-col h-[100dvh] w-screen bg-vscode-bg text-vscode-text font-sans">
      <Seo
        title="Akshay Saini | Portfolio"
        description="Portfolio of Akshay Saini, Software Engineer and Educator."
        keywords={['Akshay Saini', 'Portfolio', 'Software Engineer', 'Web Development', 'React']}
      />
      {/* Backdrop for Mobile Sidebar - Root Level for Safety */}
      {sidebarVisible && (
        <div
          className="fixed inset-0 bg-black/50 z-[90] md:hidden cursor-pointer backdrop-blur-sm"
          onClick={() => setSidebarVisible(false)}
        />
      )}

      <div className="flex flex-1 overflow-hidden relative">
        <ActivityBar />


        {/* Sidebar - Overlay on Mobile, Relative on Desktop */}
        <div className={`
            absolute top-0 bottom-0 left-12 md:static z-[100] h-full flex transition-all duration-300 ease-in-out
            ${sidebarVisible ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:hidden'}
            ${!sidebarVisible && 'md:!hidden'}
        `}>
          <Sidebar />
        </div>

        {/* Sidebar Resizer - Desktop & Mobile */}
        {sidebarVisible && (
          <div
            className="w-4 -ml-2 bg-transparent hover:bg-vscode-accent/50 cursor-col-resize active:bg-vscode-accent z-[105] touch-none"
            onMouseDown={startResizingSidebar}
            onTouchStart={startResizingSidebarTouch}
          />
        )}

        {/* Content Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-vscode-bg">
          <EditorArea />

          {/* Terminal Resizer */}
          {terminalVisible && (
            <div
              className="h-1 bg-transparent hover:bg-vscode-accent cursor-row-resize hover:delay-100 active:bg-vscode-accent z-10"
              onMouseDown={startResizingTerminal}
            />
          )}

          <Terminal />
        </div>

        {/* Backdrop removed from here */}
      </div>
      <StatusBar />
    </div>
  );
};
