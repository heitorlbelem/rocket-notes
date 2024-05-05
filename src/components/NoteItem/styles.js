import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.BACKGROUND_900};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 1.6rem;

  > button {
    display: flex;
    align-items: center;

    border: none;
    background: none;

    svg {
      color: ${({ theme, isNew}) => isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};
      font-size: 2.4rem;
    }
  }

  > input {
    height: 5.6rem;
    width: 100%;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`