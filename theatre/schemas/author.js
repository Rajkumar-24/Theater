import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

// import {defineType} from 'sanity'

// export default defineType({
//   name: 'movie',
//   title: 'Movie',
//   type: 'document',
//   fields: [
//     {
//       name: 'title',
//       type: 'string',
//     },
//     {
//       name: 'poster_path',
//       type: 'string',
//     },
//     {
//       name: 'overview',
//       type: 'string',
//     },
//     {
//       name: 'original_language',
//       type: 'string',
//     },
//   ],
// })
