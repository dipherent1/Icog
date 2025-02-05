import React from 'react';
import { createViewState, JBrowseLinearGenomeView } from '@jbrowse/react-linear-genome-view';
import { PluginManager } from '@jbrowse/core/PluginManager';
import UCSCPlugin from 'jbrowse-plugin-ucsc';



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
          uri: 'genome-data/GRCh38-PLS.bed',  // Place this file in the `public` folder or use a hosted URL
        },
      },
    }
    
  ],
  defaultSession: {
    name: 'Human Genome Demo',
    view: {
      id: 'linearGenomeView',
      type: 'LinearGenomeView',
      tracks: [
        { id: 'genes', type: 'FeatureTrack' },
      ],
    },
  },
  configuration: {
    theme: {
      palette: {
        primary: { main: '#282c34' },
        secondary: { main: '#61dafb' },
      },
      logoPath: '', // Remove the JBrowse logo
    },
  },
});

export default function GenomeViewer() {
  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#f4f4f4' }}>
      <header style={{ backgroundColor: '#282c34', padding: '10px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>Genome Viewer</h1>
      </header>
      <main style={{ flex: 1, padding: '10px' }}>
        <JBrowseLinearGenomeView viewState={viewState} />
      </main>
    </div>
  );
}

