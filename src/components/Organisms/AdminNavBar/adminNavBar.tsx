import Row from "../../Atoms/Row";
import Box from "../../Atoms/Box";
import Col from "../../Atoms/Col";
import Container from "../../Atoms/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarContext } from "../../../context";
import { useContext } from "react";
import HideOn from "../../Atoms/HideOn";
import { StyledAdminNav } from "./style";
import Drodown from "../../Molecules/Drodown";
import InlineList from "../../Molecules/InlineList/inlineList";
import FlexBox from "../../Atoms/Flexbox/flexbox";

const AdminNavBar = () => {
    const {toggle, setToggle} = useContext(SideBarContext);

    const actions = [
        { 
            name: 'Profile',
            onClick: () => console.log('this'),
        },
        { 
            name: 'Settings',
            onClick: () => console.log('this'),
        },
        { 
            name: 'Logout',
            onClick: () => console.log('this'),
        }
    ];

    const leftAdminNav = [
        { value: 'Home', href: '#'},
        { value: 'Contact', href: '#'}
    ];

    const rightMenu =  [
        { value: <FontAwesomeIcon icon={['far', 'bell']}/> , href: '#'},
        { value: <FontAwesomeIcon icon={['far', 'moon']}/> , href: '#'},
        { value: <Drodown menu={actions} name={<FontAwesomeIcon icon={['fas', 'user-tie']}/>}/>, href: '#' }
    ];

    return (
        <StyledAdminNav>
            <Container>
                <Box padding="10px 10px">
                    <FlexBox justify="space-between">
                        <HideOn on="desktop">
                            <FontAwesomeIcon 
                                icon={['fas', 'bars']}
                                onClick={() => setToggle(true)}
                            />
                        </HideOn>
                        <InlineList items={leftAdminNav}/>
                        <InlineList items={rightMenu} />
                    </FlexBox>
                </Box>
            </Container>
        </StyledAdminNav>
    )
}

export default AdminNavBar;