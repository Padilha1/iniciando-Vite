import {NavContent, NAV, GlobalStyle, SpaceDiv, Title} from "../styles"
import * as faBrands from '@styled-icons/fa-brands'


export function NavBar() {
    return (
        
        <NavContent>
            <GlobalStyle/>
            <NAV>
                <Title>
                        Padilha's Anime List
                </Title>
                <SpaceDiv>
                    <a href="https://instagram.com/matheus.padilha" target="_blank"><faBrands.Instagram size="25"/></a>
                    <a href="https://github.com/Padilha1" target="_blank"><faBrands.Github size="25"/></a>
                    <a href="https://twitter.com/Pa__dilha" target="_blank"><faBrands.Twitter size="25"/></a>
                </SpaceDiv>
            </NAV>
        </NavContent>
    );
}


