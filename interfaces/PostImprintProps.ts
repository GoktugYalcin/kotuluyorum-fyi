import { TagLink } from 'contentful'

export type PostImprintProps = {
  midliner?: string
  date?: string
  tags?: { sys: TagLink }[]
}
