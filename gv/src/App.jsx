import React from 'react';
import { createViewState, JBrowseLinearGenomeView } from '@jbrowse/react-linear-genome-view';

const viewState = createViewState({
  assembly: {
    name: 'hg38',
    sequence: {
      type: 'ReferenceSequenceTrack',
      trackId: 'hg38_refseq',
      adapter: {
        type: 'BgzipFastaAdapter',
        fastaLocation: {
          uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz',
        },
        faiLocation: {
          uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.fai',
        },
        gziLocation: {
          uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.gzi',
        },
      },
    },
  },
  tracks: [
    {
      type: 'ReferenceSequenceTrack',
      trackId: 'hg38_refseq',
      adapter: {
        type: 'BgzipFastaAdapter',
        fastaLocation: {
          uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz',
        },
        faiLocation: {
          uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.fai',
        },
        gziLocation: {
          uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.gzi',
        },
      },
    },
    {
      type: 'FeatureTrack',
      trackId: 'grch38_pls_bed',
      name: 'GRCh38 PLS BED',
      assemblyNames: ['hg38'],
      adapter: {
        type: 'BedAdapter',
        bedLocation: {
          uri: '/genome-data/GRCh38-PLS.bed',  // Ensure the file is in the `public/genome-data` folder
        },
      },
    },
  ],
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
    <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Genome Viewer</h1>
      <div style={{ height: '80%', width: '90%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
        <JBrowseLinearGenomeView viewState={viewState} />
      </div>
    </div>
  );
}
