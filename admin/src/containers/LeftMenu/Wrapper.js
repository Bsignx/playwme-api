import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: fixed;
  float: left;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${(props) => props.theme.main.sizes.leftMenu.width};
  background: ${(props) => props.theme.main.colors.playwme.backgroundBody};

  /* scrollbar overrides */
  * {
    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-track:hover {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.main.colors.white};
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: ${(props) =>
        props.theme.main.colors.playwme.backgroundHeader};
    }

    /* firefox */
    scrollbar-color: ${(props) => props.theme.main.colors.white} transparent;
  }
`;


export default Wrapper;
