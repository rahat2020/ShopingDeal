import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`;

const Language = styled.div`
    font-size: 14px;
    cursor:pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding:5px;

`
const Input = styled.input`
    border:none;
    ${mobile({ width: "45px" })}
`
const Left = styled.div`
    flex:1;
    display:flex;
    align-items: center;
`
const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
 font-weight:bold;
 ${mobile({ fontSize: "17px" })}
`
const Right = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent: "center" })}
`
const MenuItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    ${mobile({ fontSize: "10px", marginLeft:"5px" })}
`
export default function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="search"/>
                        <Search style={{color:"gray", fontSize:"16px"}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>ShopDeal</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge color="secondary" badgeContent={4}>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>

            </Wrapper>
        </Container>
    )
}
