import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Text, VStack } from "@chakra-ui/layout";
import { Menu, MenuList, MenuButton, MenuItem } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";
import { useToast } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { Link } from "react-router-dom";


const UserHeader = () => {
    const toast = useToast();

    const copyURL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            toast({
                title: "Success.",
                status: "success",
                description: "Profile link copied.",
                duration: 3000,
                isClosable: true,
            });
        });
    };

    return (
        <VStack gap={4} alignItems={"start"}>
            <Flex justifyContent={"space-between"} w={"full"}>
                <Box>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        markzuckerberg
                    </Text>
                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"}>markzuckerberg</Text>
                        <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>
                            threads.net
                        </Text>
                    </Flex>
                </Box>
                <Box>
                    <Avatar
                        name="Mark Zuckerberg"
                        src="/zuck-avatar.png"
                        size={{
                            base: "md",
                            md: "xl",
                        }}
                    />
                </Box>
            </Flex>

            <Text>hii i'm mark</Text>
            <Flex width={"full"} justifyContent={"space-between"}>
                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"}>3.2k followers</Text>
                    <Box w='5' h='5' bg={"gray.light"} borderRadius={"full"}> </Box>
                    <Link color={"gray.light"}>instagram.com</Link>
                </Flex>
                <Flex>
                    <Box className="icon-container">
                        <BsInstagram size={24} cursor={"pointer"} />
                    </Box>
                    <Box className="icon-container">
                        <Menu>
                            <MenuButton>
                                <CgMoreO size={24} cursor={"pointer"} />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={"gray.dark"}>
                                    <MenuItem bg={"gray.dark"} onClick={copyURL} >
                                        Copy link
                                    </MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Box>
                </Flex>
            </Flex>
            <Flex w={"full"}>
                <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb='3' cursor={"pointer"}>
                    <Text fontWeight={"bold"}> Threads</Text>
                </Flex>
                <Flex
                    flex={1}
                    borderBottom={"1px solid gray"}
                    justifyContent={"center"}
                    pb='3'
                    cursor={"pointer"}
                >
                    <Text fontWeight={"bold"}> Replies</Text>
                </Flex>
            </Flex>
        </VStack>
    );
};

export default UserHeader;

