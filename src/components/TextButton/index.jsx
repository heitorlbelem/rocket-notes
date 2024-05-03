import { Container } from "./styles";

export function TextButton({ title, ...rest }) {
  return (
    <Container {...rest} type="button">
      {title}
    </Container>
  );
}
