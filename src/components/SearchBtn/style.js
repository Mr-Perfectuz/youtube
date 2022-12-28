import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    max-width: 1424px;
    height: 100%;
    color: wheat;
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

`

const ItemsBtn = styled.ul`
    padding: 0;
    display: flex;
    align-items: center;
    gap: 12px;
`
const Btn = styled.button`
    display: block;
    padding: 5px 12px;
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 20px;
    color: #FFFFFF;
    cursor: pointer;

    :hover{
        background-color: #FFFFFF;
        border: 1px solid #FFFFFF;
        color: #000000;
    }
    :active{
        background-color: #FFFFFF;
        border: 1px solid #FFFFFF;
        color: #000000;
        opacity: 0.8;
    }
`
const BtnText = styled.h3`
    margin: 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`


export { Container, Btn, BtnText, ItemsBtn };