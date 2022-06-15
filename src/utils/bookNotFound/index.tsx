export const notFound = (condition: any, text: string) => {
  if (condition) {
    return <h2>{text}</h2>;
  }
};
