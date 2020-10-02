import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: ${(props) => props.theme.main.colors.playwme.backgroundHeader};
  bottom: 0;
  a {
    color: ${({ theme }) => theme.main.colors.white} !important;
  }



  .poweredBy {
    width: 100%;
    bottom: 0;
    height: 3rem;
    padding-left: 15px;
    padding-right: 15px;
    line-height: 3rem;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05rem;
    vertical-align: middle;
    color: ${({ theme }) => theme.main.colors.white};
  }
`;


export default Wrapper;
