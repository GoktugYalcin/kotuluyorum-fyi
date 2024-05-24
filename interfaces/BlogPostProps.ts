import { EntryFieldTypes } from "contentful";

export type Blog = {
  title: EntryFieldTypes.Text;
  midliner: EntryFieldTypes.Text;
  postimage: EntryFieldTypes.AssetLink;
  content: EntryFieldTypes.RichText;
};
