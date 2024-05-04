import { Brand, Container, Menu, Content, NewNote, Search } from './styles'
import { Header } from '../../components/Header';
import { TextButton } from '../../components/TextButton'

export function Home() {
  return(
    <Container>
      <Brand>
        <h1> RocketNotes </h1>
      </Brand>
      <Header />

      <Menu>
        <li><TextButton title="Todos" isActive /></li>
        <li><TextButton title="Frontend" /></li>
        <li><TextButton title="Node" /></li>
        <li><TextButton title="React" /></li>
      </Menu>
      <Search></Search>
      <Content></Content>
      <NewNote></NewNote>

    </Container>
  );
}