// eslint-disable-next-line import/prefer-default-export
export const mapStyles = (collection: { [key: string]: string }, property: string): string => {
  return collection[property];
};
