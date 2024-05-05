import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;

    padding: 4.7rem 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 2.4rem;
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -12.5rem auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`