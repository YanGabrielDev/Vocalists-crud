import { Layout } from '../components/Layout'
import { Table } from '../components/Table'
import Client from '../core/Client'
import {Button} from '../components/Button'

export default function Home() {
  const clients = [
    new Client("Chino", "1", 35 ),
    new Client("Kurt", "2", 27 ),
    new Client("Mac", "3", 27 ),
    new Client("Layne", "4", 30 )
  ]

  const clientSelect = (client: Client) => {
    console.log(client.name)
  }
  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-600 to-blue-900 text-white'>
      <Layout title='Cadastro simples'>
        <div className=' justify-end flex'>
        <Button className='mb-4'>
          Novo Cliente
        </Button>
        </div>
        <Table clients={clients} clientSelect={clientSelect}/>
      </Layout>
    </div>
  )
}
