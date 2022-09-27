import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

const CustomModal = ({ onclose, isopen, bg, color, overlayBg, footerDirection, modalHeader, modalBody, MaxW, btncolor, buttonModal, submit }) => {
    return (
        <>
            <Modal isOpen={isopen} onClose={onclose} size={"md"}>
                <ModalOverlay bg={overlayBg || 'rgba(30, 30, 30, 1)'} />
                <ModalContent maxW={MaxW} borderRadius={'1.5rem'} pb={'1rem'} bg={bg || 'brand.boldText'} color={color || 'white'}>
                    {modalHeader && <ModalHeader>{modalHeader}</ModalHeader>}
                    <ModalCloseButton border={'2px solid white'} w={'1.5rem'} mt={'0.5rem'} h={'1.5rem'} borderRadius={'full'} fontSize={'0.7rem'} />
                    {modalBody && <ModalBody>{modalBody}</ModalBody>}

                    <ModalFooter flexDirection={footerDirection}>
                        {buttonModal && buttonModal}
                        {submit && <Button variant='ghost'>Secondary Action</Button>}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CustomModal