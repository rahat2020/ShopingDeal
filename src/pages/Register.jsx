import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color:white;
    ${mobile({ width: "75%", marginTop: "20px"})}
`;

const Title = styled.h1`
    font-size:24px;
    font-weight:300;
`;

const Form = styled.form`
    flex: 1;
    min-width: 40%;
   
`;

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    ${mobile({ width: "90%" })}
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 10px 0px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
`;

const ButtonContainer = styled.div`
display: flex;
    justify-content:center;
    align-items: center;
`;

const Button = styled.button`
    width: 40%;
    border: 0.5px solid teal;
    padding: 15px 10px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-top: 10px;
    transition: all .5s ease;
    font-weight:600;
    &:hover{
        background-color: white;
        color:black;
        border: 0.5px solid #4F4F4F;
        font-weight:600;
      }
      ${mobile({ width: "100%" })}
`;

export default function Register() {
    return (
        <Container>
            <Wrapper>
                <Form>
                    <Title>CREATE A NEW ACCOUNT</Title>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                </Form>
                <Agreement>
                    By creating an account, I agree with the <br /> following terms and conditions of this Agreement
                </Agreement>
                <ButtonContainer>
                    <Button>CREATE</Button>
                </ButtonContainer>
            </Wrapper>
        </Container>
    )
}
