import React, { Component } from 'react'
import { Container, Btn, BtnText, ItemsBtn } from './style'
import { btn } from '../../utils/btn'

export default class SearchBtn extends Component {
    render() {
        return (
            <Container >
                <ItemsBtn>
                    {
                        btn.map(({ id, title }) => {
                            return (
                                <Btn key={id}>
                                    <BtnText>{title}</BtnText>
                                </Btn>
                            )
                        })
                    }
                </ItemsBtn>
            </Container>
        )
    }
}
