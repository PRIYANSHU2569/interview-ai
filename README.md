# 🚀 Interview AI – AI-Powered Job Preparation Platform

Interview AI is a **Full Stack AI-powered Job Preparation Platform** that helps users prepare for technical interviews using **Generative AI**. The platform analyzes resumes, identifies skill gaps based on job descriptions, generates personalized interview questions, and creates ATS-optimized resumes.

Built using the **MERN Stack**, **Gemini AI**, **JWT Authentication**, and **Puppeteer**, this project demonstrates real-world full-stack development with AI integration.

---

## ✨ Features

- 🔐 Secure User Authentication (JWT)
- 🚪 Logout with Token Blacklisting
- 📄 Resume Upload & Parsing
- 🤖 AI-Powered Resume Analysis
- 🎯 Skill Gap Detection
- 💼 Job Description Analysis
- ❓ Personalized AI Interview Questions
- 📑 ATS-Optimized Resume Generation
- 📄 PDF Resume Generation using Puppeteer
- 📊 Interview Report Dashboard
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Authentication
- JWT
- bcryptjs
- Cookie Parser

### AI
- Google Gemini API

### Other Tools
- Puppeteer
- Multer
- Zod
- Dotenv

---

## 📂 Project Structure

```
Interview-AI/
│
├── Frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── utils/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/PRIYANSHU2569/interview-ai.git

cd interview-ai
```

### Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

Start the backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

---

## 📸 Screenshots

- Login Page
- Dashboard
- Resume Analysis
- Interview Report
- ATS Resume Generator

---

## 🚀 Future Enhancements

- Voice-based AI Interview
- Mock Interview Timer
- AI Feedback & Scoring
- Company-wise Interview Questions
- Resume Version History
- Email Reports
- Admin Dashboard

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork this repository and submit a pull request.

---


## 👨‍💻 Author

**Priyanshu Gupta**

- GitHub: https://github.com/PRIYANSHU2569
- LinkedIn: https://www.linkedin.com/in/priyanshu-gupta-7474502b7/

⭐ If you found this project helpful, consider giving it a star!
