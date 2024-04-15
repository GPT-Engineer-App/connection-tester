import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Text, VStack } from "@chakra-ui/react";
import { FaPlay, FaStop } from "react-icons/fa";

const Index = () => {
  const [ip, setIp] = useState("");
  const [port, setPort] = useState("");
  const [protocol, setProtocol] = useState("tcp");
  const [status, setStatus] = useState("");
  const [log, setLog] = useState([]);

  const handleStart = () => {
    // TODO: Implement the logic to start the connectivity test
    // Send hello packets to the specified IP and port using the selected protocol
    // Update the status and log accordingly
    setStatus("Connecting...");
    setLog([...log, `Starting connectivity test to ${ip}:${port} using ${protocol}`]);
    // Simulated delay for demonstration purposes
    setTimeout(() => {
      const success = Math.random() < 0.8; // 80% chance of success
      if (success) {
        setStatus("Connected");
        setLog([...log, `Successfully connected to ${ip}:${port} using ${protocol}`]);
      } else {
        setStatus("Connection failed");
        setLog([...log, `Failed to connect to ${ip}:${port} using ${protocol}`]);
      }
    }, 2000);
  };

  const handleStop = () => {
    // TODO: Implement the logic to stop the connectivity test
    setStatus("");
    setLog([...log, "Connectivity test stopped"]);
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>IP Address</FormLabel>
          <Input type="text" value={ip} onChange={(e) => setIp(e.target.value)} placeholder="Enter IP address" />
        </FormControl>
        <FormControl>
          <FormLabel>Port</FormLabel>
          <Input type="number" value={port} onChange={(e) => setPort(e.target.value)} placeholder="Enter port number" />
        </FormControl>
        <FormControl>
          <FormLabel>Protocol</FormLabel>
          <Select value={protocol} onChange={(e) => setProtocol(e.target.value)}>
            <option value="tcp">TCP</option>
            <option value="udp">UDP</option>
          </Select>
        </FormControl>
        <Button leftIcon={<FaPlay />} colorScheme="blue" onClick={handleStart} disabled={!ip || !port}>
          Start
        </Button>
        <Button leftIcon={<FaStop />} colorScheme="red" onClick={handleStop}>
          Stop
        </Button>
        <Text fontWeight="bold">{status}</Text>
        <Box borderWidth={1} borderRadius="md" p={4}>
          <Text fontWeight="bold" mb={2}>
            Log:
          </Text>
          {log.map((entry, index) => (
            <Text key={index}>{entry}</Text>
          ))}
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
