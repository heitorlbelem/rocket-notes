import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextButton } from '../../components/TextButton'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

export function SignUp() {
  return(
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2> Crie sua conta </h2>

        <Input
          placeholder='Nome'
          type='text'
          icon={FiUser}
          autoComplete='username'
        />

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

        <Button title='Cadastrar'></Button>

        <TextButton title='Voltar para o login' isActive />
      </Form>
    </Container>
  )
}