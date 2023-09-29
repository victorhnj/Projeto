import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sitecpa',

  projectId: '79y0unlb',
  dataset: 'sitecpa',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
