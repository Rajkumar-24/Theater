import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'nymyrbug',
  dataset: 'production',
  useCdn: true,
  token:
    'skKKzXKrqbFzdKWQWggbuQyNCqhNI095NhWLjfz7fRFXQDSt8dM4SMhWwpifzP2CNswD3zmRHMu4OfAz3XDaqfJn45IyG1iCoZkU4gjZd0YJNUNCze1X0Sard2LSPPXFBr6oCZdDSKHAhcQIH3xoxRj9CGUtKcrcLyt33rQ8UXWDlvtURBpJ',
})
