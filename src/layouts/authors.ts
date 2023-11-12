export const authors = [
  {
    name: "Amadeus Mader",
    image: "https://og.railway.app/authors/jake-runzer.jpeg",
  },
];

const defaultAuthor = authors[0];

export const getAuthor = (name: string) => {
  const author = authors.find(author => author.name === name);

  return author ?? defaultAuthor;
};
