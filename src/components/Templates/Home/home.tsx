import {
    NavBar,
    Container,
    Button
} from '../../index';

const HomeTemplate = () => {

    const leftMenu = [
        { value: 'Features', href: '#' },
        { value: 'Pricing', href: '#' },
        { value: 'Blog', href: '#' },
    ];

    const rightMenu = [
        { value: 'Sign In', href: '/signin' },
        { value: <Button> Try it for free </Button>, href:"/signup" }
    ];
    
    return (
        <>
            <NavBar leftMenu={leftMenu} rightMenu={rightMenu} />
            <Container>  
                <h1>Home page</h1>
            </Container>
        </>
    )
}

export default HomeTemplate;