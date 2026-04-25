# Base Proof of Action (MVP)

A verifiable protocol for recording off-chain actions on-chain. Build trust, verify intent, and unlock new possibilities on the Base network.

## Overview

Base Proof of Action allows users and protocols to securely generate and verify proofs for off-chain activities (e.g., GitHub contributions, social media engagement, off-chain identity checks) without revealing sensitive data. Built specifically for the Base ecosystem, it ensures fast, low-cost, and reliable on-chain verification.

## Tech Stack

This repository serves as the initial MVP shell and frontend application.

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Dark Mode default)
- **Deployment**: Vercel-ready

## Local Development

To run the project locally, ensure you have Node.js and npm installed.

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
  - `/src/app/page.tsx`: The landing page.
  - `/src/app/app/page.tsx`: The MVP dashboard / proof creation shell.
- `/src/components`: Reusable UI and layout components.
  - `/src/components/ui`: Core building blocks (`Button`, `Card`, etc.).
  - `/src/components/layout`: Global components (`Navbar`).

## Roadmap & Next Steps

This repository currently contains the initial UI shell. The following features will be built in upcoming phases:

1. **Wallet Integration**: Implement Wagmi/Viem or Coinbase Wallet SDK for connecting wallets.
2. **Smart Contracts**: Develop the core Proof Verification contracts and deploy them to Base Sepolia.
3. **Backend / Attestation Service**: Create a secure attestation service or integrate with existing protocols (like EAS - Ethereum Attestation Service) to issue proofs.
4. **Farcaster Integration**: Allow users to share generated proofs directly to Farcaster using Frames.

## License

MIT License
