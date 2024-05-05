import { Container, Form } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'

export function NewNote(){
  return(
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href='#'>voltar</a>
          </header>
          
          <Input placeholder='Título' />

          <Section title='Links úteis'>
          </Section>
        </Form>
      </main>
    </Container>
  )
}