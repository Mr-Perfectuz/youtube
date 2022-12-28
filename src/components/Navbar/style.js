import styled, { css } from "styled-components";

import { ReactComponent as menu } from '../../assets/icons/menu.svg';
import { ReactComponent as logo } from '../../assets/icons/logo.svg';
import { ReactComponent as search } from '../../assets/icons/search.svg';
import { ReactComponent as camera } from '../../assets/icons/camera.svg';
import { ReactComponent as left_topbar } from '../../assets/icons/left-topbar.svg';
import { ReactComponent as Bell } from '../../assets/icons/Vector.svg';
import { ReactComponent as Person } from '../../assets/icons/pp.svg';

const common = css`
    display: flex;
    align-items: center;
`
const Image_Padding = 8;

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #212121;

`
const ContainerMain = styled.div`
    display: flex;
    max-width: 1664px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    background: #212121;

`
const ContainerWrapper = styled.div`
    max-width: 1664px;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 27px;
`
const Nav = styled.div`
    ${common}
    width: 100%;
    height: 56px;
    color: wheat;
    padding: 12px 0;

`

const NavLeft = styled.div`
    ${common};
    width: 300px;
    gap: 8px;
`

NavLeft.Menu = styled(menu)`
    :hover{
        opacity: 0.8;
    }
    :active{
        opacity: 0.6;
    }`
NavLeft.Logo = styled(logo)`
    cursor: pointer;
`


const NavCenter = styled.div`
    ${common};
    justify-content: center;
    flex: 1;
`

const InputWrapper = styled.div`
    display: flex;
    align-items: center;

`
const Input = styled.input`
    ${common};
    max-width: 574px;
    min-width: 570px;
    width: 100%;
    height: 32px;
    background: #000000;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 2px 0px 0px 2px;
    color: #fff;
    outline: none;
    padding-left: 6px ;

    @media (max-width: 1200px){
        min-width: 400px ;
}
    @media (max-width: 1000px){
        min-width: 300px ;
}

`


const SearchWrapper = styled.div`
    ${common};
    width: 65px;
    height: 32px;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 0px 2px 2px 0px;
`

SearchWrapper.Search = styled(search)``

const NavRight = styled.div`
    ${common};
    width: 300px;
    justify-content: flex-end;
    gap: 24px;
`

NavRight.Camera = styled(camera)`
    padding: ${Image_Padding}px;
`;
NavRight.Topbar = styled(left_topbar)`
    padding: ${Image_Padding}px`;

NavRight.Bell = styled(Bell)`
    padding: ${Image_Padding}px`;

NavRight.Person = styled(Person)`
    padding: ${Image_Padding}px`;



export { Container, ContainerWrapper, Nav, NavCenter, NavLeft, NavRight, InputWrapper, Input, SearchWrapper, ContainerMain }