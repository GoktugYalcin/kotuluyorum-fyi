import { ContentfulCollection, Tag, TagCollection, TagLink } from 'contentful'
import Contentful from '@/lib/contentful'

export type PostImprintProps = {
  midliner?: string
  date?: string
  tags?: { sys: TagLink }[]
}
