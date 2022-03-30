export const removeTagsFromString = (textWithTags: string): string => {
  return textWithTags?.replace(/<\/?[^>]+(>|$)/g, "");
};
