import { Container, Form, Avatar } from './styles';
import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi';
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom';

export function Profile() {
  return(
    <Container>
      <header>
        <Link to='/'><FiArrowLeft /></Link>
      </header>

      <Form>
        <Avatar>
          <img
            src='https://github.com/heitorlbelem.png'
            alt='avatar'
          />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

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
          placeholder='Senha atual'
          type='password'
          icon={FiLock}
          autoComplete='current-password'
        />

        <Input
          placeholder='Nova senha'
          type='password'
          icon={FiLock}
          autoComplete='new-password'
        />

        <Button title='Salvar'></Button>
      </Form>
    </Container>
  );
}