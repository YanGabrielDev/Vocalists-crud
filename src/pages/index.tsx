import { Layout } from '../components/Layout'
import { Table } from '../components/Table'
import Client from '../core/Client'
import {Button} from '../components/Button'
import { Form } from '../components/Form'
import { useState } from 'react'

export default function Home() {
  const[visible, setVisible]= useState<'table' | 'form'>('table')
  const[client, setClient]= useState<Client>(Client.void())
  const clients = [
    new Client("Chino", "1", 35 ),
    new Client("Kurt", "2", 27 ),
    new Client("Mac", "3", 27 ),
    new Client("Layne", "4", 30 )
  ]

  const clientSelect = (client: Client) => {
    setClient(client)
    setVisible('form')
  }

  const saveClient = (client: Client) => {
      console.log(client)
      setVisible('table')
  }
  const newClient = () => {
    setClient(Client.void())
    setVisible('form')

  }
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-600 to-blue-900 text-white'>
      <Layout title='Cadastro simples'>
        {visible === 'table' ? (
          <>
          <div className=' justify-end flex'>
          <Button className='mb-4' col='green' onClick={() => newClient()}>
            Novo Cliente
          </Button>
          </div>
          <Table clients={clients} clientSelect={clientSelect}/>
          </>
        ) : (  <Form clientChange={saveClient} client={client} cancel={() => setVisible('table')}/>) }
      
      </Layout>
    </div>
  )
}
