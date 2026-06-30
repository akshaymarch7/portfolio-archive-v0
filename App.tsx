import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { EditorProvider } from './context/EditorContext';
import { Layout } from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <EditorProvider>
        <Layout />
      </EditorProvider>
    </HelmetProvider>
  );
};

export default App;
