import styled from 'styled-components';

const A = styled.a`
  position: relative;
  padding-top: 0.7rem;
  padding-bottom: 0.2rem;
  padding-left: 1.6rem;
  min-height: 3.6rem;
  border-left: 0.3rem solid transparent;
  cursor: pointer;
  color: ${(props) => props.theme.main.colors.white};
  text-decoration: none;
  display: block;
  -webkit-font-smoothing: antialiased;

  &:hover {
    color: ${(props) => props.theme.main.colors.white} !important;
    background: ${(props) => props.theme.main.colors.playwme.backgroundHeader};

    border-left: 0.3rem solid
      ${(props) => props.theme.main.colors.white}!important;
    text-decoration: none;
  }

  &:focus {
    color: ${(props) => props.theme.main.colors.white};
    text-decoration: none;
  }

  &.linkActive {
    color: ${(props) => props.theme.main.colors.playwme.backgroundHeader};
    border-left: 0.3rem solid
      ${(props) => props.theme.main.colors.playwme.backgroundHeader};
  }
`;

export default A;
