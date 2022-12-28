import React, { Component } from 'react'
import { Container, Item, Items, Icon, Title, ItemsCenter, Subscriptions, ItemsBottom, ItemsLast } from './style';
import { data1, data2, data3, data4 } from '../../utils/sidebar';

class SideBar extends Component {
    render() {
        return (
            <Container>
                <Items>
                    {
                        data1.map(({ id, title, icon }) => {
                            return (
                                <Item key={id}>
                                    <Icon src={icon} />
                                    <Title>{title}</Title>
                                </Item>
                            )
                        })
                    }
                </Items>
                <ItemsCenter>
                    {
                        data2.map(({ id, title, icon }) => {
                            return (
                                <Item key={id}>
                                    <Icon src={icon} />
                                    <Title>{title}</Title>
                                </Item>
                            )
                        })
                    }
                </ItemsCenter>
                <Subscriptions>ABONELİKLER</Subscriptions>
                <ItemsBottom>
                    {
                        data3.map(({ id, title, icon }) => {
                            return (
                                <Item key={id}>
                                    <Icon src={icon} />
                                    <Title>{title}</Title>
                                </Item>
                            )
                        })
                    }
                </ItemsBottom>
                <Subscriptions>YOUTUBE'DEN DAHA FAZLA İÇERİK</Subscriptions>
                <ItemsLast>
                    {
                        data4.map(({ id, title, icon }) => {
                            return (
                                <Item key={id}>
                                    <Icon src={icon} />
                                    <Title>{title}</Title>
                                </Item>
                            )
                        })
                    }
                </ItemsLast>
            </Container>
        )
    }
}

export default SideBar;