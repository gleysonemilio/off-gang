'use client'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { InforQrCodeInterface, createQrcode, getQrcode } from '@/firebase/Api'
import { useEffect, useState } from 'react'

export default function Adm() {
  const [list, setlist] = useState<InforQrCodeInterface[]>([])

  const handleGetAllQrCode = async () => {
    const data = await getQrcode()

    console.log(data)

    setlist(data)
  }

  useEffect(() => {
    handleGetAllQrCode()
  }, [])

  const handleCreateQrCode = async () => {
    try {
      await createQrcode()
      handleGetAllQrCode()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="w-full max-w-[1000px] my-20 px-10 font-[family-name:var(--font-geist-sans)] justify-center items-center flex flex-col gap-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-mono">Id</TableHead>
            <TableHead>Id Crip</TableHead>
            <TableHead>Descrip</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-center">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map(({ id, type, description, emoji }) => (
            <TableRow>
              <TableCell className="font-mono text-xs">{id}</TableCell>
              <TableCell className="font-mono text-xs">
                https://off-gang.vercel.app/show?param={btoa(id)}
              </TableCell>
              <TableCell className="font-mono text-xs">{type}</TableCell>
              <TableCell className="font-mono text-xs text-right">{description}</TableCell>
              <TableCell className="font-mono text-2xl text-center">{emoji}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button onClick={handleCreateQrCode}>Create New ID</Button>
    </div>
  )
}
