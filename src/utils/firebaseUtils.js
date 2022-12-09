const firebaseUtils = () => {
  const getArrayFromCollection = (collection) => {
    return collection.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
  };

  return {
    getArrayFromCollection,
  };
};

export default firebaseUtils;
