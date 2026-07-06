import { db } from "../firebase/config"
import { collection, addDoc, getDocs } from "firebase/firestore"

// CREATE ORDER
export const createOrder = async (order) => {
  return await addDoc(collection(db, "orders"), order)
}

// GET ORDERS
export const getOrders = async () => {
  const snapshot = await getDocs(collection(db, "orders"))
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}