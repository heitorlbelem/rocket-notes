import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 1.6rem 2.2rem;
  margin-bottom: 1.6rem;
  border-radius: 8px;
  border: none;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  > p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.4rem;
    font-weight: 700;
    text-align: left;

    flex: 1;
  }
`