export const logentries = {
    name: 'arbeidslogg',
    title: 'Arbeidslogg',
    type: 'document',
    fields: [
      {
        name: 'dato',
        title: 'Dato',
        type: 'date',
      },
      {
        name: 'navn',
        title: 'Navn',
        type: 'string',
      },
      {
        name: 'beskrivelse',
        title: 'Hva ble gjort?',
        type: 'text',
      },
    ],
}