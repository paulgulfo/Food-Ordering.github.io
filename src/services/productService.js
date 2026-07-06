import { db } from "../firebase/config"
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore"

// GET PRODUCTS
export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, "products"))
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}

// ADD PRODUCT
export const addProduct = async (product) => {
  return await addDoc(collection(db, "products"), product)
}

// DELETE PRODUCT
export const deleteProduct = async (id) => {
  return await deleteDoc(doc(db, "products", id))
}