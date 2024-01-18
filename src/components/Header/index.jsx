import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/heitorlbelem.png" alt="Foto do Usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Heitor Belém</strong>
        </div>
      </Profile>
    </Container>
  );
}
