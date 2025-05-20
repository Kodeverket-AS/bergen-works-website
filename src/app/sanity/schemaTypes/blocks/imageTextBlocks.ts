import { Rule } from '@sanity/types'

export default [
  {
    name: 'imageTopTextBottom',
    title: '🖼️ Image Top / Text Bottom',
    type: 'object',
    fields: [
      { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
      { 
        name: 'alt', 
        type: 'string', 
        title: 'Alt text',
        validation: (rule: Rule) => rule.required()
      },
      { name: 'text', type: 'array', title: 'Text', of: [{ type: 'block' }] },
    ],
    preview: {
      prepare() {
        return { title: '🖼️ Image Top / Text Bottom' }
      },
    },
  },

  {
    name: 'imageLeftTextRight',
    title: '🖼️⬅️ Image Left / Text Right',
    type: 'object',
    fields: [
      { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
      { 
        name: 'alt', 
        type: 'string', 
        title: 'Alt text',
        validation: (rule: Rule) => rule.required()
      },
      { name: 'text', type: 'array', title: 'Text', of: [{ type: 'block' }] },
    ],
    preview: {
      prepare() {
        return { title: '🖼️⬅️ Image Left / Text Right' }
      },
    },
  },

  {
    name: 'imageRightTextLeft',
    title: '➡️🖼️ Text Left / Image Right',
    type: 'object',
    fields: [
      { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
      { 
        name: 'alt', 
        type: 'string', 
        title: 'Alt text',
        validation: (rule: Rule) => rule.required()
      },
      { name: 'text', type: 'array', title: 'Text', of: [{ type: 'block' }] },
    ],
    preview: {
      prepare() {
        return { title: '➡️🖼️ Text Left / Image Right' }
      },
    },
  },
  {
  name: 'twoImagesTextBottom',
  title: '🖼️🖼️ Text Under Two Images',
  type: 'object',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (rule: Rule) => rule.required().min(2).max(2),
    },
    { 
      name: 'altTexts', 
      type: 'array', 
      title: 'Alt texts', 
      of: [{ type: 'string' }],
      validation: (rule: Rule) => rule.required().min(2).max(2),
    },
    { name: 'text', type: 'array', title: 'Text', of: [{ type: 'block' }] },
  ],
  preview: {
    prepare() {
      return { title: '🖼️🖼️ Text Under Two Images' }
    },
  },
},

{
  name: 'fullImageWithTextOverlay',
  title: '🌄 Text Overlay on Image',
  type: 'object',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Background Image',
      options: { hotspot: true },
      validation: (rule: Rule) => rule.required(),
    },
    { 
      name: 'alt', 
      type: 'string', 
      title: 'Alt text',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'overlayText',
      type: 'array',
      title: 'Overlay Text',
      of: [{ type: 'block' }],
    },
    {
      name: 'textPosition',
      type: 'string',
      title: 'Text Position',
      options: {
        list: [
          { title: 'Center', value: 'center' },
          { title: 'Top Left', value: 'top-left' },
          { title: 'Bottom Right', value: 'bottom-right'  },
          { title: 'Top Right', value: 'top-right' },
          { title: 'Bottom Left', value: 'bottom-left' },
          { title: 'Top Center', value: 'top'},
          { title: 'Bottom Center', value: 'bottom' },
        ],
        layout: 'radio',
      },
    },
  ],
  preview: {
    prepare() {
      return { title: '🌄 Text Overlay on Image' }
    },
  },
},

{
  name: 'threeImagesInline',
  title: '🖼️🖼️🖼️ 3 Images in a Row',
  type: 'object',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (rule: Rule) => rule.required().min(3).max(3),
    },
    { 
      name: 'altTexts', 
      type: 'array', 
      title: 'Alt texts', 
      of: [{ type: 'string' }],
      validation: (rule: Rule) => rule.required().min(3).max(3),
    },
  ],
  preview: {
    prepare() {
      return { title: '🖼️🖼️🖼️ 3 Images in a Row' }
    },
  },
},
{
  name: 'imagesSidesTextCenter',
  title: '🖼️ Text 🖼️',
  type: 'object',
  fields: [
    {
      name: 'leftImage',
      type: 'image',
      title: 'Left Image',
      options: { hotspot: true },
    },
    {
      name: 'leftAlt',
      type: 'string',
      title: 'Left Image Alt Text',
    },
    {
      name: 'text',
      type: 'array',
      title: 'Center Text',
      of: [{ type: 'block' }],
    },
    {
      name: 'rightImage',
      type: 'image',
      title: 'Right Image',
      options: { hotspot: true },
    },
    {
      name: 'rightAlt',
      type: 'string',
      title: 'Right Image Alt Text',
    },
  ],
  preview: {
    prepare() {
      return { title: '🖼️ Text 🖼️ Side Images' }
    },
  },
},

{
  name: 'imageCollage',
  title: '🖼️🖼️🖼️ Image Collage',
  type: 'object',
  fields: [
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image (Top)',
      options: { hotspot: true },
    },
    {
      name: 'mainAlt',
      type: 'string',
      title: 'Main Image Alt Text',
    },
    {
      name: 'bottomImages',
      type: 'array',
      title: 'Bottom Images',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (rule: Rule) => rule.required().min(2).max(2),
    },
    {
      name: 'bottomAlts',
      type: 'array',
      title: 'Alt texts for bottom images',
      of: [{ type: 'string' }],
      validation: (rule: Rule) => rule.required().min(2).max(2),
    },
  ],
  preview: {
    prepare() {
      return { title: '🖼️🖼️🖼️ Image Collage (1 top, 2 bottom)' }
    },
  },
},

{
  name: 'fourImageGrid',
  title: '🔲 4-Image Grid',
  type: 'object',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (rule: Rule) => rule.required().min(4).max(4),
    },
    {
      name: 'altTexts',
      type: 'array',
      title: 'Alt Texts',
      of: [{ type: 'string' }],
      validation: (rule: Rule) => rule.required().min(4).max(4),
    },
  ],
  preview: {
    prepare() {
      return { title: '🔲 4-Image Grid' }
    },
  },
},


] 