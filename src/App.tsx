import React from 'react';
import { Container } from '@mui/material';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { DataGrid,GridColDef } from '@mui/x-data-grid';
import Form from './components/form';


const columns: GridColDef[] = [
  { field: 'apelido', headerName: 'Apelido', width: 110 },
  { field: 'nome', headerName: 'Nome', width: 150 },
  { field: 'telefone', headerName: 'Telefone', width: 150 },
  { field: 'logradouro', headerName: 'Rua', width: 250 },
  { field: 'complemento', headerName: 'Comp.', width: 150 },
  { field: 'cep', headerName: 'CEP', width: 100 },
  { field: 'numero', headerName: 'Nº', width: 50 },
  { field: 'cidade', headerName: 'Cidade', width: 100 },
  { field: 'uf', headerName: 'UF', width: 50 },
];



function App() {
  const [toggleForm, setToggleForm] = React.useState(false);
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    findData()
  }, [])


  function findData() {
    fetch('https://agenda-fiap-api.vercel.app/contacts')
      .then( data => data.json())
      .then(data => setData(data))
  }

  function reloadItems() {
    setToggleForm(false)
    findData()
  }

  return (
    <Container maxWidth="lg">
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PermContactCalendarIcon fontSize='large' style={{ marginRight: 10 }} />
          <h1>Agenda Full Stack</h1>
        </div>
        <div>
          <AddCircleIcon fontSize='large' color='primary' onClick={() => setToggleForm( toggleForm => !toggleForm)} />
        </div>
      </header>
      <main>
        {toggleForm && <Form reloadItems={reloadItems}/>}
        <div style={{ height: '80vh', width: '100%' }}>
          <DataGrid rows={data} columns={columns} loading={data.length === 0}  />
        </div>
      </main>
    </Container>
  )
}

export default App
