import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextButton } from '../../components/TextButton'
import { FiMail, FiLock } from 'react-icons/fi'

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2> Faça seu login </h2>

        <Input
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          autoComplete='username'
        />

        <Input
          placeholder='Senha'
          type='password'
          icon={FiLock}
          autoComplete='current-password'
        />

        <Button title='Entrar'></Button>

        <TextButton title='Criar conta' isActive />
      </Form>
      <Background />
    </Container>
  )
}