import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { TextButton } from "../../components/TextButton";
import { Container, Links, Content } from "./styles";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <TextButton title="Excluir nota" isActive />

          <h1> Introdução ao React </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veritatis facilis ad et voluptate! Itaque, consectetur quas rem et,
            dolores temporibus adipisci ea beatae quisquam, quae tempore!
            Minima iure adipisci expedita.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>
          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
