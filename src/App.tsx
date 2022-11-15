import React from 'react';
import { Container } from '@mui/material';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Form from './components/form';


const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

function App() {
  const [toggleForm, setToggleForm] = React.useState(false);

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
        {toggleForm && <Form />}
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      </main>
    </Container>
  )
}

export default App
