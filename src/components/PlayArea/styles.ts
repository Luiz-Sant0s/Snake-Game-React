import styled from 'styled-components';

export const PlayAreaContainer = styled.section`
    overflow: hidden;
    display: flex;
    position: relative;

    &:focus {
        outline: none;
    }
    &:active {
        cursor: wait;
    }
`;