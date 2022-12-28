import styled from "styled-components";

const Container = styled.div`
width: 100%;
height: 100%;
max-width: 1424px;

`

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
     flex-wrap: wrap;

`
const CardMenu = styled.div`

    width: 332px;
    display: flex;
    flex-direction: column;
`

const CardImg = styled.img`
    width: 332px;
    height: 186px;
    margin-top: 24px;
`
const CardImgIcon = styled.img`
    width: 36px;
    height: 36px;
`
const CardTitle = styled.h2`
    padding: 0;
    margin: 0;
    width: 240px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #FFFFFF;
`
const CardImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    margin-top: 12px;
`
const CardChannelName = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.6);
    margin: 4px 0  0 48px ;

`

const CardChannelDate = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.6);

`

const CardChannelTime = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.6);
`
const CardTextWrapper = styled.div`
    display: flex;
    margin: 4px 0  0 48px ;
`


export { Container, CardWrapper, CardMenu, CardImg, CardTitle, CardImgIcon, CardImgWrapper, CardChannelName, CardChannelDate, CardChannelTime, CardTextWrapper }