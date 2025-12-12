import { useState } from 'react'
import { Button, CssBaseline, Container, Grid } from '@mui/material'
import TextInput from './components/TextInput/TextInput'
import StatsDisplay from './components/StatsDisplay/StatsDisplay'

function App() {
  const [count, setCount] = useState(0)
  const [words, setWords] = useState('')

  return (
    <>
      <CssBaseline />
      <Container>
        <Grid minHeight={'100vh'} container justifyContent={"center"} alignItems={"center"}>
          <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6 }}>
            <TextInput onTextChange={(text) => { setCount(text.length); setWords(text) }} />
            <StatsDisplay stats={{ characterCount: count, wordCount: count === 0 ? 0 : 1 + words.trim().split(/\s+/).length - 1, readingTime: count / 200 }} />
          </Grid>
        </Grid>
        <h1>{count}</h1>
      </Container>
    </>
  )
}

export default App
