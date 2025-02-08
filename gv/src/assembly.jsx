export default {
    name: "GRCh38",
    sequence: {
      type: "ReferenceSequenceTrack",
      trackId: "GRCh38-ReferenceSequenceTrack",
      adapter: {
        type: "BgzipFastaAdapter",
        fastaLocation: {
          uri: "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/fasta/GRCh38.fa.gz",
          locationType: "UriLocation",
        },
        faiLocation: {
          uri: "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/fasta/GRCh38.fa.gz.fai",
          locationType: "UriLocation",
        },
        gziLocation: {
          uri: "https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/fasta/GRCh38.fa.gz.gzi",
          locationType: "UriLocation",
        },
      },
    },
    additionalSequences: [
      {
        name: "hg38",
        sequence: {
          type: "ReferenceSequenceTrack",
          trackId: "hg38_refseq",
          adapter: {
            type: "BgzipFastaAdapter",
            fastaLocation: {
              uri: "https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz",
            },
            faiLocation: {
              uri: "https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.fai",
            },
            gziLocation: {
              uri: "https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.gzi",
            },
          },
        },
      },
    ],
    aliases: ["hg38"],
    refNameAliases: {
      adapter: {
        type: "RefNameAliasAdapter",
        location: {
          uri: "http://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/GRCh38.aliases.txt",
          locationType: "UriLocation",
        },
      },
    },
  };
  