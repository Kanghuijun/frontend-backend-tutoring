# 📘 FrontBackTutor

NestJS + TypeScript Frontend + Vite React Frontend + Docker  
튜터링 학습용 풀스택 예제 프로젝트

---

## 📥 Clone & Run

```bash
# 1. Clone the repository
git clone https://github.com/Kanghuijun/frontBackTutor.git

# 2. Enter project folder
cd frontBackTutor

# 3. Run with Docker Compose
docker compose up
📚 Study Topics
Backend (NestJS + MySQL)로 Post CRUD API 만들기

TypeScript React로 CRUD 컴포넌트 작성하기

Vite React로 간단한 CRUD UI 구현 후 Backend 연동하기

Docker Compose로 여러 서비스를 동시에 실행하는 방법 익히기

📂 Project Structure
bash
코드 복사
frontBackTutor/
 ├── backend/          # NestJS Backend (Post CRUD API)
 ├── frontend/         # TypeScript React Frontend
 ├── react-frontend/   # Vite-based React Frontend
 ├── docker-compose.yml
 └── README.md
🌐 Access
Backend API → http://localhost:3000/post

TS Frontend → http://localhost:5173

React Frontend (Vite) → http://localhost:5174

MySQL → localhost:3378 (user: user, pw: 1234)