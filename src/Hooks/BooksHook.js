import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs, query, doc, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const BooksHook = () => {
  const dispatch = useDispatch();

  const switchModeColor = (val) => {
    // dispatch(setModeColor(val));
  };

  const getItemsByCategory = async (idCategory) => {

    const colRef = collection(db, '/categories/' + idCategory + '/libros');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
  };
  const getArrayFromCollection = (collection) => {
    return collection.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
  };

  return {
    switchModeColor,
    getItemsByCategory,
  };
};

export default BooksHook;
