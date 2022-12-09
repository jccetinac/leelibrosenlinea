import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs, query, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

const BooksHook = () => {
  const dispatch = useDispatch();

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

  const getBooks = async () => {
    const colRef = collection(db, '/books/');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
  };

  const getBookById = async (id) => {
    const docRef = doc(db, 'books', id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };

  return {
    getItemsByCategory,
    getBooks,
    getBookById,
  };
};

export default BooksHook;
