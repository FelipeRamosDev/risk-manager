import styled from 'styled-components';

export const Main = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${props => props.theme.primary.hardDark};
    color: ${props => props.theme.text.dark}
`;