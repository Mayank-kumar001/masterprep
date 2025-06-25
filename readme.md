# 🎯 InterviewPrep — All-in-One Interview Preparation & Recruiter Dashboard

InterviewPrep is a full-stack, AI-powered platform built to streamline technical interview preparation for students while providing insightful dashboards for recruiters and colleges. It goes beyond standard DSA practice to cover all rounds of hiring — technical, aptitude, reasoning, and behavioral — and offers features that boost productivity and real-world readiness.

---

## 🚀 Features

### 👨‍💻 For Students
- **Multi-language DSA Practice** (powered by Judge0 API)
![code editor](https://res.cloudinary.com/dinmal6os/image/upload/v1750824206/md1_d6goht.jpg)
- **Custom Playlists**: Create and revise topic-based question lists
- **Premium Playlists (paid)**: "FAANG Top 50", "JavaScript Polyfills", etc.
![code editor](https://res.cloudinary.com/dinmal6os/image/upload/v1750824352/md2_bfj4lp.jpg)
- **Call Stack**: Built-in task manager with goals, deadlines, and reminders
- **Aptitude & Logical Reasoning(upcoming)** sections
- **Machine Coding Round Interface(upcoming)**
- **AI-Powered Mock Interviews(upcoming)** with simulated feedback

### 🧑‍💼 For Recruiters & Colleges
- **Recruiter Dashboard** to view student performance and progress
- **Candidate Filtering** based on real metrics (not just resumes or GPA)
- **College Integration** for centralized student tracking

---

## 🛠️ Tech Stack

- **Frontend**: React, React Router DOM, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Code Execution**: Judge0 API
- **AI Integration**: OpenAI API (for mock interviews)
- **Authentication**: (e.g., JWT / OAuth – customizable based on usage)

---

## 💡 Future Enhancements

- Resume builder and evaluator
- Leaderboards and peer challenges
- Company-specific question banks
- Integration with placement cells and campus hiring tools
- Gamified prep with streaks, XP, and ranks

---

## 📦 Getting Started (Development)

To get InterviewPrep up and running on your local machine for development purposes, follow these steps:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/Mayank-kumar001/masterprep.git](https://github.com/Mayank-kumar001/masterprep.git)
    cd masterprep
    ```

2.  **Install backend dependencies**
    ```bash
    cd backend
    npm install
    ```

3.  **Run PostgreSQL via Docker**
    ```bash
    docker run --name interviewprep-db -e POSTGRES_USER=myuser -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres
    ```

4.  **Setup Prisma**
    ```bash
    npx prisma generate
    npx prisma migrate dev
    npx prisma db push
    ```

5.  **Install frontend dependencies**
    ```bash
    cd frontend
    npm install
    ```

6.  **Configure .env for backend**
    Navigate to the `backend` directory and create a `.env` file. Add your environment variables. refer .env.sample in backend directory. DO same for frontend

    ```bash
    cd ../backend
    touch .env
    # Open .env and add your variables, e.g.:
    # PORT=5000
    # DATABASE_URL="postgresql://myuser:yourpassword@localhost:5432/interviewprepdb?schema=public"
    #etc.
    ```

7.  **Run backend**
    ```bash
    npm run dev
    ```

8.  **Run frontend**
    Open a new terminal, navigate to the `client` directory, and run:
    ```bash
    cd frontend
    npm run dev
    ```

---

## ⚙️ Setting Up Judge0 (Local Execution Environment)

This section details how to set up Judge0, which powers the multi-language DSA practice.

### **Step 1: Install WSL and Ubuntu (Windows Users)**

1.  **Enable WSL**
    - Open PowerShell as Administrator and run:
        ```powershell
        wsl --install
        ```
    - This will install WSL (Windows Subsystem for Linux) along with the default Ubuntu distribution.

2.  **Restart Your Computer**
    - After the installation, you’ll be prompted to restart your computer.
    - Restart to complete the WSL setup.

3.  **Complete Ubuntu Setup**
    - Open the **Ubuntu terminal** from the Start menu.
    - Follow the prompts to create a UNIX username and password.

4.  **Update Ubuntu**
    - Once Ubuntu is set up, run the following commands to update all packages:
        ```bash
        sudo apt update && sudo apt upgrade -y
        ```

5.  *(Optional)* **Adjust cgroup settings for better Docker compatibility**
    - Open the GRUB config file:
        ```bash
        sudo nano /etc/default/grub
        ```
    - Find the line starting with `GRUB_CMDLINE_LINUX` and change it to:
        ```bash
        GRUB_CMDLINE_LINUX="systemd.unified_cgroup_hierarchy=0"
        ```
    - Save and exit (`Ctrl + O`, `Enter`, `Ctrl + X`).
    - Update GRUB and reboot:
        ```bash
        sudo update-grub
        sudo reboot
        ```

---

### **Step 2: Install Docker and Docker Compose**

1.  **Install Docker**
    - Open the **Ubuntu terminal** and run:
        ```bash
        sudo apt update && sudo apt install -y docker.io
        ```
    - (Note: It's better to install `docker.io` package for Ubuntu.)

2.  **Install Docker Compose**
    - Still in the Ubuntu terminal, install Docker Compose:
        ```bash
        sudo apt install -y docker-compose
        ```

---

### **Step 3: Install and Set Up Judge0**

1.  **Download and Extract Judge0**
    - Download the Judge0 release archive:
        ```bash
        wget [https://github.com/judge0/judge0/releases/download/v1.13.1/judge0-v1.13.1.zip](https://github.com/judge0/judge0/releases/download/v1.13.1/judge0-v1.13.1.zip)
        ```
    - Unzip the downloaded archive:
        ```bash
        unzip judge0-v1.13.1.zip
        ```

2.  **Set Up Secure Passwords**
    - **Generate random passwords** for Redis and Postgres:
        - Visit [Random Password Generator](https://www.random.org/passwords/?num=1&len=32&format=plain&rnd=new) and copy the first password.
        - Open the `.env` file within the unzipped Judge0 directory:
            ```bash
            nano judge0-v1.13.1/.env
            ```
        - Update the `REDIS_PASSWORD` with the generated password.
        - Repeat the process for `POSTGRES_PASSWORD` using a new random password.

3.  **Start Judge0 Services**
    - Navigate to the Judge0 folder:
        ```bash
        cd judge0-v1.13.1
        ```
    - Start the database and Redis services:
        ```bash
        docker-compose up -d db redis
        ```
    - Wait for a few seconds:
        ```bash
        sleep 10s
        ```
    - Start the remaining services:
        ```bash
        docker-compose up -d
        ```
    - Wait a few more seconds:
        ```bash
        sleep 5s
        ```

4.  **Verify the Installation**
    - Open your browser and visit:
        ```
        http://localhost:2358/docs
        ```
    - You should see the Judge0 API documentation page, meaning your Judge0 instance is running successfully!