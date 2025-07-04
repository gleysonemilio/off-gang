import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  updateDoc,
} from 'firebase/firestore'

import { firebaseapp } from './initializeApp'

const db = getFirestore(firebaseapp)
const listQrCodeCollectionRef = collection(db, 'listQrCode')

const getQrcode = async () => {
  const data = await getDocs(listQrCodeCollectionRef)
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
}

export interface UpdateInforInterface {
  id: string
  type: string
  emoji?: string
  description: string
}

async function getQrcodeOfId(id: string) {
  try {
    const docRef = doc(db, 'listQrCode', id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log('Dados do documento:', docSnap.data())
      return docSnap.data()
    } else {
      console.log('Documento não encontrado!')
      return null
    }
  } catch (error) {
    console.error('Erro ao buscar documento:', error)
    throw error
  }
}

async function createQrcode(type: string, description: string) {
  const user = await addDoc(listQrCodeCollectionRef, {
    type,
    description,
  })
  return user
}

const updateInforQrcode = async ({ id, type, description }: UpdateInforInterface) => {
  if (!id && !type) return null

  const page = doc(db, 'listQrCode', id)

  await updateDoc(page, {
    type: type,
    description: description,
  })

  return page
}

export { createQrcode, getQrcode, getQrcodeOfId, updateInforQrcode }
