<<<<<<< HEAD
# certificate_verification_system
This is MERN full stack project
=======
# 🚀 Certificate Verification System (Blockchain + MERN)

A blockchain-powered platform for **secure certificate generation, storage, and verification**.
This project uses **Ethereum (local + testnet)**, **Smart Contracts**, **IPFS**, **MongoDB**, and a **Node.js/React.js** stack to ensure certificates cannot be forged, tampered, or duplicated.

---

## ✨ Features

✔ Generate verifiable certificates
✔ Store certificate hash on the blockchain
✔ Validate authenticity using transaction hash
✔ MERN stack architecture
✔ Smart Contract deployed locally or on Testnet
✔ Docker support
✔ CI-ready structure (optional)

---

## 🛠 Tech Stack

| Layer          | Technology                   |
| -------------- | ---------------------------- |
| Frontend       | React.js / Web3.js           |
| Backend        | Node.js / Express            |
| Blockchain     | Ethereum / Ganache / Truffle |
| Database       | MongoDB                      |
| Smart Contract | Solidity                     |
| Others         | IPFS, dotenv, Docker         |

---

# 📦 Local Development Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/shalini02693/certificate-verification-system.git
cd certificate-verification-system
```

---

# 🔗 Blockchain Setup

## Install Ganache CLI

```bash
npm install -g ganache-cli
```

Start Local Blockchain:

```bash
npm run ganache
```

> Windows users: run this in a **separate terminal**.

---

## Deploy Smart Contract Locally

```bash
npm run contract-deploy
```

Repeat these 2 commands every time you restart the project.

---

# 🗄 Database Setup (MongoDB)

Ensure MongoDB server is running.

Open Mongo shell:

```bash
mongo
```

Switch DB:

```javascript
use certification
```

Create user:

```javascript
db.createUser({
  user: "<DB_USER>",
  pwd: "<DB_PASSWORD>",
  roles: [{ role: "dbOwner", db: "certification" }]
});
```

Add these credentials to your `.env` file.

---

# 🚀 Start Server

```bash
npm start
```

---

# 🌐 Deploy Smart Contract to Testnet

1. Create MetaMask account
2. Copy your **mnemonic phrase**
3. Create a project on **Infura**
4. Get your endpoint:

   ```
   https://rinkeby.infura.io/v3/<YOUR_INFURA_KEY>
   ```
5. Add these to `.env` (sample in `.env.example`)
6. Deploy:

```bash
npm run deploy
```

Save the contract address for later use.

---

# 🧪 Testing

Run blockchain tests:

```bash
truffle test
```

Make sure Ganache is running.

---

# 📚 Documentation & Notes

* Useful Truffle commands → `instructions/COMMANDS.md`
* Contract code → `contracts/`
* Backend → `server.js`
* Frontend → `client/`

---

# 📺 Project Overview Video (Optional)

You can add a project demo link here later.

---


>>>>>>> fd18961 (Add files)
