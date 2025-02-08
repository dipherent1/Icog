import React from 'react';
import { createViewState, JBrowseLinearGenomeView } from '@jbrowse/react-linear-genome-view';


// import tracks from tracks.jsx
import tracks from './tracks';
import assembly from './assembly';

const viewState = createViewState({
  assembly: assembly,
  tracks: tracks,
  defaultSession: {
    name: 'Basic Genome View',
    view: {
      id: 'linearGenomeView',
      type: 'LinearGenomeView',
    },
  },
});

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Genome Viewer</h1>
      <div style={{ height: 'calc(100vh - 60px)', width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
        <JBrowseLinearGenomeView viewState={viewState} />
      </div>
    </div>
  );
}
