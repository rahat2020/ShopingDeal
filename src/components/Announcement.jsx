import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height:30px;
    background-color: teal;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export default function Announcement() {
    return (
        <Container>
            Super deal! free shipping on orders over $50
        </Container>
    )
}
