import React, { Component } from 'react'
import { CardMenu, Container, CardWrapper, CardImg, CardTitle, CardImgIcon, CardImgWrapper, CardChannelName, CardChannelDate, CardChannelTime, CardTextWrapper } from './style';
import { mainData } from '../../utils/main'

export default class Main extends Component {
    render() {
        return (
            <Container>
                <CardWrapper>
                    {
                        mainData.map(({ id, img, imgIcon, title, channelName, channelDate, time }) => {
                            return (
                                <CardMenu key={id}>
                                    <CardImg src={img}></CardImg>
                                    <CardImgWrapper>
                                        <CardImgIcon src={imgIcon}></CardImgIcon>
                                        <CardTitle>{title}</CardTitle>
                                    </CardImgWrapper>
                                    <CardChannelName>{channelName}</CardChannelName>

                                    <CardTextWrapper>
                                        <CardChannelDate>
                                            {channelDate}
                                        </CardChannelDate>
                                        <CardChannelTime>
                                            {time}
                                        </CardChannelTime>

                                    </CardTextWrapper>



                                </CardMenu>
                            )
                        })
                    }

                </CardWrapper>
            </Container>
        )
    }
}
