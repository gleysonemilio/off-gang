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

export interface InforQrCodeInterface {
  id: string
  type: string
  emoji?: string
  description: string
}
const nameBd = process.env.NEXT_PUBLIC_NAME_LIST_FIREBASE_TESTE as string

const db = getFirestore(firebaseapp)
const listQrCodeCollectionRef = collection(db, nameBd)

const getQrcode = async () => {
  const data = await getDocs(listQrCodeCollectionRef)
  const generationList = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  return generationList as InforQrCodeInterface[]
}

async function getQrcodeOfId(id: string, isEncryption?: boolean) {
  try {
    const idConver = isEncryption ? atob(id) : id
    const docRef = doc(db, nameBd, idConver)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
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

async function createQrcode() {
  const user = await addDoc(listQrCodeCollectionRef, {
    type: 'Texto',
    emoji: '',
    description: '',
  })
  return user
}

const updateInforQrcode = async ({ id, type, description, emoji }: InforQrCodeInterface) => {
  if (!id && !type) return null

  const page = doc(db, nameBd, id)

  await updateDoc(page, {
    type: type,
    description: description,
    ...(emoji && { emoji: emoji }),
  })

  return page
}

export { createQrcode, getQrcode, getQrcodeOfId, updateInforQrcode }
