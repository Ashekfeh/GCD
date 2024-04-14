import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

import logo from '../../assets/Logo/logo_main.svg';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


function NavBar() {
    const [t, i18n] = useTranslation();
    const html = document.querySelector('html');

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        // const html = document.querySelector('html');
        html.setAttribute('dir', i18n.dir(lng));
        html.setAttribute('lang', lng);
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <img src={logo} alt='logo' width={158} height={60} />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={`${html.getAttribute('lang') === 'en'? 'me-auto': 'ms-auto'}`}>
                        <Nav.Link href="#features">{t('HOME')}</Nav.Link>
                        <Nav.Link href="#pricing">{t('WHO')}</Nav.Link>
                        <Nav.Link href="#pricing">{t('NEWS')}</Nav.Link>
                        <Nav.Link href="#pricing">{t('DIPLOMAS')}</Nav.Link>
                        <Nav.Link href="#pricing">{t('MEMBERSHIP')}</Nav.Link>
                        <Nav.Link href="#pricing">{t('SUPPORT')}</Nav.Link>

                    </Nav>
                    <Nav>
                        {/* <Nav.Link href="#deets" className='btn btn-primary'>{t('CONTACT')}</Nav.Link> */}
                        <Button href="#" target="_blank">{t('CONTACT')}</Button>
                        <NavDropdown title={t('LANG')} id="collapsible-nav-dropdown">
                            <NavDropdown.Item onClick={() => changeLanguage('en')}>
                                {t('EN')}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => changeLanguage('ar')}>
                                {t('AR')}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;