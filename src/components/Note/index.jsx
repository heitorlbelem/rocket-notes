import { Container } from './styles'
import { Tag } from '../Tag' 

export function Note({ data, ...rest }) {
  return(
    <Container>
      <p>{data.title}</p>
        {
          data.tags &&
          <footer> 
            { data.tags.map(tag => (<Tag key={tag.id} title={tag.name} />)) }
          </footer>
        }
    </Container>
  )
}