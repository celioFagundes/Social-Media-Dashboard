import styled from 'styled-components';

export const Wrapper = styled.div`
    position:absolute;
    height:100vh;
    width:100%;
    z-index:-1;
`;
export const Primary = styled.div`
    height:30vh;
    background-color: ${props => props.theme.colors.primary};

`;
