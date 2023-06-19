export const generateNewId = (data) => {
  const newId = data[data.length - 1]._id++;
  return newId;
};
