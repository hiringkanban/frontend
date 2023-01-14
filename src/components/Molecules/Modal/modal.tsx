import Text from "../../Atoms/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { 
    StyledModal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "./style";

import { modalProps } from "./type";
import Button from "../../Atoms/Button";
import Portal from "../../Atoms/Portal/portal";

const Modal:React.FC<modalProps> = (props) => {

    const {
        title,
        open,
        width,
        children,
        onCancel,
        onOk
    } = props;

    return (
        <>
            { open &&
            <Portal>
                <StyledModal>
                    <ModalContent width={width}>
                        <ModalHeader>
                            <Text>{title}</Text>
                            <FontAwesomeIcon icon={['fas', 'close']} onClick={onCancel}/>
                        </ModalHeader>
                        <ModalBody>
                            {children}
                        </ModalBody>
                        <ModalFooter>
                            <Button variant="primary" margin="0 5px 0 0" onClick={onOk}>Ok</Button>
                            <Button variant="default" onClick={onCancel}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </StyledModal>
            </Portal>
            }
        </>
    )
}

export default Modal;