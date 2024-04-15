# connection-tester

I would like to create a tool to test connectivity between two computers at different location based on an IP and tcp/udp port. This application should be able to send hello packets from the transmitter to the receiver. The receiver should see the "hello" printed out on their screen which signifies a successful connection. Security and error handling consideration must be applied. Also, users should be able to have some feed back from the screen as to whether or not the connections is going through, along with a log file. 

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/connection-tester.git
cd connection-tester
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
