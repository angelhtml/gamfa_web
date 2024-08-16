import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    ChakraProvider,
    VStack
  } from "@chakra-ui/react";
  import { useDisclosure } from "@chakra-ui/react";
  import React from 'react';
  import { RiMenuUnfoldFill } from 'react-icons/ri';
  import './burger.css';

function Burger() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return(
        <div>
            <ChakraProvider>
            <Button  bg='0' onClick={onOpen} padding="0"> 
            <RiMenuUnfoldFill style={{color:"silver",width:'2rem',height:'4rem'}}/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        width="40%"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton style={{color:'red',border:'0'}}/>
          <DrawerHeader><center><p class='burger-drawer-txt1'>شرکت گامفا</p><hr width="90%"/></center></DrawerHeader>

          <DrawerBody style={{marginTop:'1rem'}}>
            <center>
              <VStack>
            <a href="#" class="burger-drawer-links">خانه</a><br />
            <a href="#" class="burger-drawer-links">برگه نمونه</a><br />
            <a href="#" class="burger-drawer-links">خدمات اصلی</a><br />
            <a href="#" class="burger-drawer-links" >سفارش جدید</a><br />
            <a href="#" class="burger-drawer-links">تماس با ما</a><br />
            </VStack>
            </center>
          </DrawerBody>
          <center>
          <hr width="90%"/>
          <p class='burger-drawer-footer'>با خیال راحت برای کسب و کار خود گام بردارید</p>
          </center>
          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      </ChakraProvider>
        </div>
    )
}
export default Burger;