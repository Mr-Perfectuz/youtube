import React, { Component } from 'react'
import SideBar from '../SideBar';
import { Container, ContainerWrapper, Nav, NavCenter, NavLeft, NavRight, InputWrapper, Input, SearchWrapper, ContainerMain, MainWrapper } from './style';
import SearchBtn from '../SearchBtn';
import Main from '../MainSection';

class Navbar extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#212121' }}>
                <Container>
                    <ContainerWrapper>
                        <Nav>
                            <NavLeft>
                                <NavLeft.Menu />
                                <NavLeft.Logo />
                            </NavLeft>
                            <NavCenter>
                                <InputWrapper>
                                    <Input placeholder='Search' />
                                    <SearchWrapper>
                                        <SearchWrapper.Search />
                                    </SearchWrapper>
                                </InputWrapper>
                            </NavCenter>
                            <NavRight>
                                <NavRight.Camera />
                                <NavRight.Topbar />
                                <NavRight.Bell />
                                <NavRight.Person />
                            </NavRight>
                        </Nav>
                    </ContainerWrapper>
                </Container>
                <ContainerMain>
                    <SideBar />
                    <MainWrapper>
                        <SearchBtn />
                        <Main />
                    </MainWrapper>
                </ContainerMain>

            </div>
        )
    }
}

export default Navbar;
