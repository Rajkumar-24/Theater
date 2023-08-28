import {defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    {
      title: 'City',
      name: 'city',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
  ],
})
