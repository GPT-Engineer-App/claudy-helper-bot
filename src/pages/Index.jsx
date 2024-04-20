import { Box, Text, VStack, Input, Button, useColorMode, useColorModeValue, IconButton, Image } from "@chakra-ui/react";
import { FaSun, FaMoon, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "gray.200");

  return (
    <VStack minH="100vh" bg={bgColor} align="center" justify="center" p={4}>
      <Box textAlign="center" mb={8}>
        <Text fontSize="4xl" fontWeight="bold" color={textColor}>
          Meet Claudy, Your Chatbot
        </Text>
        <Text fontSize="md" color={textColor}>
          Always ready to assist you!
        </Text>
      </Box>
      <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1675865254433-6ba341f0f00b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGF0Ym90fGVufDB8fHx8MTcxMzU3NDYxNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Claudy the Chatbot" mb={4} />
      <Box w="full" maxW="md">
        <VStack spacing={4}>
          <Input placeholder="Type your message here..." size="lg" />
          <Button rightIcon={<FaPaperPlane />} colorScheme="blue" w="full">
            Send
          </Button>
        </VStack>
      </Box>
      <IconButton aria-label="Toggle theme" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} isRound size="lg" alignSelf="flex-end" position="absolute" top={4} right={4} onClick={toggleColorMode} />
    </VStack>
  );
};

export default Index;
