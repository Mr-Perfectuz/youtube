import styled from "styled-components";
import { css } from "styled-components";

const Itemscommon = css`
    display: flex;
    flex-direction:column;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

const Container = styled.div`
    width: 240px;
    height: calc(128vh - 56px);
    background: #212121;

`;

const Items = styled.ul`
    ${Itemscommon};
    padding-bottom: 12px;
`
const ItemsCenter = styled.ul`
     ${Itemscommon};
    padding-top: 12px;
`
const ItemsBottom = styled.ul`
     ${Itemscommon};
     padding-bottom: 12px;
`
const ItemsLast = styled.ul`
     ${Itemscommon};
     border: none;
     padding-bottom: none;
`
const Item = styled.ul`
    padding:0;
    height: 40px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    gap: 28px;
    padding: 8px 28px;
    cursor: pointer;
    :hover{
        background: rgba(255, 255, 255, 0.2);
    }
    :active{
        background: rgba(255, 255, 255, 0.2);
        opacity: 0.8;
    }
`
const Subscriptions = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.6);
    margin-left: 24px;
`

const Icon = styled.img`
`
const Title = styled.h4`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;

`

export { Container, Item, Items, Icon, Title, ItemsCenter, Subscriptions, ItemsBottom, ItemsLast };