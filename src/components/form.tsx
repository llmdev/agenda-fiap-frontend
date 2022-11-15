import { Button, Grid, TextField } from "@mui/material";

const Form = () => {
    return (
        <>
         <h2>Adicionar novo contato</h2>
        
        <Grid component="form" container spacing={2} >
           
        <Grid item xs={4}>
          <TextField
            margin="normal"
            fullWidth
            required
            id="email"
            label="Apelido"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            margin="normal"
            fullWidth
            required
            id="email"
            label="Nome"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            margin="normal"
            fullWidth
            required
            id="email"
            label="Sobrenome"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>

        <Grid item xs={4}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="email"
            label="CEP"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>

        <Grid item xs={6}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="email"
            label="Logradouro"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>

        <Grid item xs={2}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="email"
            label="Numero"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>
        <Grid item xs={4}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="email"
            label="Complemento"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>

        <Grid item xs={4}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="email"
            label="Cidade"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>

        <Grid item xs={4}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="email"
            label="Estado"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>

        <Grid item xs={4}>
           <TextField
            margin="normal"
            fullWidth
            required
            id="email"
            label="Telefone"
            name="email"
            autoComplete="email"
            autoFocus
          />
        </Grid>

        <Grid item xs={2} style={{ alignItems: 'center', display: 'flex'}}>
            <Button variant="contained" fullWidth>Salvar</Button>
        </Grid>
        <Grid item xs={2} style={{ alignItems: 'center', display: 'flex'}}>
            <Button variant="outlined" color="warning" fullWidth>Limpar</Button>
        </Grid>
      </Grid>
      </>
    )
}

export default Form;