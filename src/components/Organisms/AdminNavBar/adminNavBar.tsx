import Row from "../../Atoms/Row";
import Box from "../../Atoms/Box";
import Col from "../../Atoms/Col";
import StyledAdminNav from "./style";
import Container from "../../Atoms/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SideBarContext } from "../../../context";
import { useContext } from "react";
import HideOn from "../../Atoms/HideOn";

const AdminNavBar = () => {
    const {toggle, setToggle} = useContext(SideBarContext);

    return (
        <StyledAdminNav>
            <Container>
                <Box>
                    <Row>
                        <Col span={1}>
                            <HideOn on="desktop">
                                <FontAwesomeIcon 
                                    icon={['fas', 'bars']}
                                    onClick={() => setToggle(true)}
                                />
                            </HideOn>
                        </Col>
                        <Col span={4} offset={6}></Col>
                    </Row>
                </Box>
            </Container>
        </StyledAdminNav>
    )
}

export default AdminNavBar;