import { type SchemaTypeDefinition } from 'sanity'
import { product } from './schema/product'
import { category } from './schema/category'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category],
}
