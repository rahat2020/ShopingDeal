import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 100%;
  border: 1px solid teal;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight:600;
  transition: all .5s ease;

  &:hover{
    background-color: white;
    color:black;
    border: 1px solid #4F4F4F;
    font-weight:600;
  }
`;

const Link = styled.a`
  margin: 10px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default function Login() {
    return (
        <Container>
            <Wrapper>
                <Form>
                    <Title>LOGIN TO YOUR ACCOUNT</Title>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                </Form>
                <Button>LOGIN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD!</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Wrapper>
        </Container>
    )
}
