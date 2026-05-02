# Base Action Console

A premium, modular utility console for the Base ecosystem. 

## Overview

Base Action Console is a multi-module developer and user utility command center for Base. It provides high-performance on-chain and off-chain tools to streamline daily interactions, verify contributions, deploy smart contracts, mint assets, and experiment with cutting-edge protocol sandboxes.

The repository is currently structured as a premium high-fidelity modular shell, ready for smart contract hookups and full production logic.

## Current Modules

The Console features 7 core modules built to maximize productivity on Base:
1. **Overview**: Command center dashboard displaying top-level summary metrics, quick actions, and recent activity.
2. **Daily**: Consistency check-in streak tracker and daily transaction logging.
3. **Proofs**: Verifiable protocol for recording off-chain actions (such as GitHub pull requests or commits) on-chain.
4. **Deploy**: Fast contract deployer for launching standard ERC-20 tokens or ERC-721 NFT collections.
5. **Mint**: Direct asset claim, faucet claiming, and custom URI metadata testing interface.
6. **Trade**: Swap utility to exchange developer assets instantly via a testnet rate simulator.
7. **x402 Lab**: Sandbox testing lab for observing experimental complex transaction scenarios.

## Development Status & Priorities

This repository contains the high-fidelity UI and routing infrastructure.
- **Next Step / Priority**: The **Proofs** module is the first real logic priority and will receive production logic next.
- **Current Status**: Complete visual and routing shell with high-fidelity modules in place. Compiles fully and static-renders correctly.

## Architecture & Information Architecture

The information architecture centers around a unified layout with a persistent sidebar that supports module swapping without deep navigation overhead.

```
  Base Action Console
  ├── Overview (Command Center & Activity Feed)
  ├── Daily (Action Check-In Streak & Daily GM/GN txs)
  ├── Proofs (GitHub Attestations & Actions)
  ├── Deploy (ERC-20 & ERC-721 Contract Deployers)
  ├── Mint (Asset claim & URI Faucets)
  ├── Trade (High-performance testnet swap interface)
  └── x402 Lab (Advanced sandbox scenarios)
```

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Vanilla CSS (Dark Mode default)
- **Deployment**: Vercel-ready

## Local Development

To run the project locally, ensure you have Node.js installed.

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **View the application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/src/app`: Next.js App Router pages and layout.
  - `/src/app/page.tsx`: Landing page.
  - `/src/app/app`: Console module views and shell.
- `/src/components`: Reusable UI and layout components.
  - `/src/components/ui`: Core primitives (`Button`, `Card`, etc.).
  - `/src/components/layout`: Global elements (`Navbar`, `AppSidebar`).

## License

MIT License
