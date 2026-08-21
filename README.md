# 🚀 Interview AI – AI-Powered Job Preparation Platform

Interview AI is a **production-ready Full Stack AI-powered Job Preparation Platform** that helps users prepare for technical interviews using **Google Gemini AI**. The platform analyzes resumes, compares them with job descriptions, identifies skill gaps, generates personalized interview questions, and creates ATS-friendly resumes in PDF format.

Built using the **MERN Stack**, **Gemini AI**, **JWT Authentication**, **MongoDB Atlas**, and **Puppeteer**, this project demonstrates real-world full-stack web development with AI integration.

---

## 🌐 Live Demo

**🔗 Live Website:**  
https://interview-ai-frontend-sf02.onrender.com

**⚙️ Backend API:**  
https://interview-ai-backend-sgmj.onrender.com

---

## ✨ Features

- 🔐 Secure User Authentication using JWT
- 🍪 Cookie-Based Authentication
- 🚪 Logout with Token Blacklisting
- 📄 Resume Upload & PDF Parsing
- 🤖 AI-Powered Resume Analysis
- 💼 Job Description Analysis
- 🎯 Skill Gap Detection
- ❓ Personalized Technical Interview Questions
- 🗣️ Behavioral Interview Questions
- 📅 AI-Generated Preparation Plan
- 📊 Interview Report Dashboard
- 📑 ATS-Optimized Resume Generation
- 📄 Resume PDF Generation using Puppeteer
- ☁️ Cloud Deployment using Render
- 📱 Fully Responsive User Interface

---

# 🛠️ Tech Stack

## Frontend

- React.js
- React Router
- Axios
- Context API
- SCSS

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

## Authentication

- JWT (JSON Web Token)
- bcryptjs
- Cookie Parser

## Artificial Intelligence

- Google Gemini API

## Other Tools

- Puppeteer
- Multer
- Zod
- pdf-parse
- Dotenv

---

# 🏗️ System Architecture

```text
                     +--------------------+
                     |      React.js      |
                     |    Frontend UI     |
                     +---------+----------+
                               |
                               |
                           Axios API
                               |
                               ▼
                    +----------------------+
                    | Node.js + Express.js |
                    |      Backend API     |
                    +----------+-----------+
                               |
          +--------------------+--------------------+
          |                    |                    |
          ▼                    ▼                    ▼
   MongoDB Atlas        Google Gemini AI      Puppeteer
   User Data            AI Analysis          PDF Generator
```

---

# 📂 Project Structure

```text
Interview-AI/
│
├── Frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
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
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/PRIYANSHU2569/interview-ai.git

cd interview-ai
```

---

# Backend Setup

```bash
cd Backend

npm install
```

Create a `.env` file inside the Backend folder.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_GENAI_API_KEY=your_google_gemini_api_key

CLIENT_URL=http://localhost:5173
```

Start Backend

```bash
npm run dev
```

---

# Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

---

# ☁️ Deployment

### Frontend

- Render (Static Site)

### Backend

- Render (Web Service)

### Database

- MongoDB Atlas

### AI

- Google Gemini API

---

# 📌 API Features

### Authentication

- User Registration
- User Login
- User Logout
- Get Current User

### Interview

- Upload Resume
- Resume Parsing
- AI Interview Report Generation
- Get Interview Report
- Get All Interview Reports

### Resume

- ATS Resume Generation
- Resume PDF Download

---

# 📸 Screenshots

## 🏠 Home Page

> <img width="1308" height="857" alt="image" src="https://github.com/user-attachments/assets/8ed75617-6487-4a19-ba84-13da8d07e4c1" />


---

## 🔐 Login Page

><img width="1695" height="896" alt="image" src="https://github.com/user-attachments/assets/8ed05c06-1495-4c10-a04a-6f155724ac62" />


---

## 📄 Resume Upload

> <img width="1917" height="976" alt="image" src="https://github.com/user-attachments/assets/8ca0ca84-8cde-46fc-924c-43ec53e96e01" />


---

## 🤖 AI Interview Report

> <img width="1632" height="960" alt="image" src="https://github.com/user-attachments/assets/82b3acc6-ec4b-4ff2-b12a-86b4994dbbee" />


---

# 🚀 Future Enhancements

- 🎤 Voice-Based AI Mock Interview
- ⏱️ Interview Timer
- 📈 AI Performance Score
- 💬 AI Feedback after Interview
- 🏢 Company-wise Interview Questions
- 📚 Resume Version History
- 📧 Email Reports
- 📊 Admin Dashboard
- 🌙 Dark Mode

---

# 🤝 Contributing

Contributions are welcome!

If you'd like to improve this project:

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Priyanshu Gupta**

🎓 B.Tech CSE, VIT Bhopal

GitHub:
https://github.com/PRIYANSHU2569

LinkedIn:
https://www.linkedin.com/in/priyanshu-gupta-7474502b7/

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It really helps and motivates me to build more open-source projects.

---

# 📄 License

This project is licensed under the **MIT License**.
