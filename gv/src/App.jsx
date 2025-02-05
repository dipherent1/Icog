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
    <div style={{ height: '600px', width: '100%' }}>
      <h1 style={{ textAlign: 'center' }}>Genome Viewer</h1>
      <JBrowseLinearGenomeView viewState={viewState} />
    </div>
  );
}
