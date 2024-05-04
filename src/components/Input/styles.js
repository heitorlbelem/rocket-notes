import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 2rem 1.6rem;
  margin-bottom: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 8px;

  > input {
    width: 100%;

    font-size: 1.4rem;
    
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: 0;
    
    &::placeholder {
      opacity: 0.9;
    }
  }
`;