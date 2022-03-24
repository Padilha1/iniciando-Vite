import {NavContent, NAV, GlobalStyle} from "../styles"
import {material, octicons} from 'styled-icons'


export function NavBar() {
    return (
        
        <NavContent>
            <GlobalStyle/>
            <NAV>
                <h3>
                        Padilha's Anime List
                </h3>
                <div className="social">
                    <a href="">
                        @styled-icons/boxicons-logos/Instagram
                    </a>
                </div>
            </NAV>
        </NavContent>
    );
}



