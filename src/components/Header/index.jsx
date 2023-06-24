import Logo from '../../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'

import { Container, Menu, Li } from './style'

function Header() {
    const { pathname } = useLocation()
    return (

        <Container>
            <img src={Logo} alt="Logo-Dev-Movies" />
            <Menu>
                <Li isactive={pathname === '/'}>
                    <Link to='/'>Home</Link>
                </Li>
                <Li isactive={pathname.includes('/filmes')}>
                    <Link to='/filmes'>Filmes</Link>
                </Li>
                <Li isactive={pathname.includes('/series')}>
                    <Link to='/series'>Séries</Link>
                </Li>

            </Menu>
            {/* <img src={Logo} alt="Logo DevMovies" style={{width: 500}} /> */}
        </Container>
    )
}


export default Header