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
