import { Button, Grid, TextField } from "@mui/material";
import React from "react";

async function findCep(CEP: any) {
    return await fetch(`https://viacep.com.br/ws/${CEP}/json/`).then(data => data.json());
}

const Form = ({reloadItems}) => {

    const initialData = {
        apelido: "",
        nome: "",
        sobrenome: "",
        telefone: "",
        logradouro: "",
        complemento: "",
        cep: "",
        numero: "",
        cidade: "",
        uf: "",
    }

    const [data, setData] = React.useState(initialData);

    function findCepAndReplaceState(cep: any) {
        findCep(cep).then( data => {
            setData(oldData => ({
                ...oldData,
                logradouro: data.logradouro,
                cidade: data.localidade,
                uf: data.uf
            }))
        })
    }

    function handleChange(e) {
        setData(oldData => ({
            ...oldData,
            [e.target.name]: e.target.value
        }))
    }

    function saveData() {
        fetch('https://agenda-fiap-api.vercel.app/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then( () => reloadItems() )
    }

    return (
        <>
         <h2>Adicionar novo contato</h2>
        <Grid component="form" container spacing={2} >
           
        <Grid item xs={4}>
          <TextField
            margin="normal"
            fullWidth
            required
            id="apelido"
            label="Apelido"
            name="apelido"
            autoComplete="apelido"
            value={data.apelido}
            autoFocus
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            margin="normal"
            fullWidth
            required
            id="nome"
            label="Nome"
            name="nome"
            autoComplete="nome"
            value={data.nome}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            margin="normal"
            fullWidth
            required
            id="sobrenome"
            label="Sobrenome"
            name="sobrenome"
            autoComplete="sobrenome"
            value={data.sobrenome}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={4}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="cep"
            label="CEP"
            name="cep"
            autoComplete="cep"
            onBlur={(e) => findCepAndReplaceState(e.target.value)}
            value={data.cep}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={6}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="logradouro"
            label="Logradouro"
            name="logradouro"
            autoComplete="logradouro"
            value={data.logradouro}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={2}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="numero"
            label="Numero"
            name="numero"
            autoComplete="numero"
            value={data.numero}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={4}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="complemento"
            label="Complemento"
            name="complemento"
            autoComplete="complemento"
            value={data.complemento}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={4}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="cidade"
            label="Cidade"
            name="cidade"
            autoComplete="cidade"
            value={data.cidade}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={4}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="uf"
            label="Estado"
            name="uf"
            autoComplete="uf"
            value={data.uf}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={4}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="telefone"
            label="Telefone"
            name="telefone"
            autoComplete="telefone"
            value={data.telefone}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={2} style={{ alignItems: 'center', display: 'flex'}}>
            <Button variant="contained" fullWidth onClick={saveData}>Salvar</Button>
        </Grid>
        <Grid item xs={2} style={{ alignItems: 'center', display: 'flex'}}>
            <Button variant="outlined" color="warning" fullWidth onClick={ () => setData(initialData)}>Limpar</Button>
        </Grid>
      </Grid>
      </>
    )
}

export default Form;