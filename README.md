# 🛠️ **Concordium - CODEX**

Welcome to **Concordium** – an open-source project designed for collaborative contribution.  
Feel free to add new features and make improvements, while ensuring the original functionality remains intact.

---

## ⚙️ **Tech Stack Used**
The project is built using the following technologies:

- ⚛️ **React Native** – For building the user interface.  
- 🎨 **Tailwind CSS** – For styling and component design.  
- 🔥 **Firebase** – For backend services, authentication, and data storage.  

---

## 🚩 **Issues in the Project**
Here are the current issues that need attention:

- 🔥 **Authentication Routing:** Incomplete or broken authentication flow.  
- ⚠️ **WriteBlog Page Not Loading:** The page isn't rendering properly.  
- 🛑 **Web Page Rendering Issues:** The website isn't displaying as expected.  
- 🔧 **Missing JavaScript Code:**  
   - Implement the missing logic in `hook/useAuthStatus.js`.  
   - Write the missing code in `hook/useImageUpload.js`.  

---

## 🚀 **Features You Can Add**
Here are some features you can contribute to enhance the project:

- 📝 **MyBlog Page:**  
    - Create a `MyBlog` page to showcase all the blogs posted by the user.  
    - Store and retrieve the blog data from Firebase.  
- 🔥 **Firebase Backend:**  
    - Set up a Firebase console.  
    - Integrate Firebase backend for authentication, data storage, and blog management.  

---

## 🛠️ **Getting Started**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/AuRa123456/blog-web.git
   cd blog-web-main
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

---

## 🔥 **Getting Started with Firebase**

To set up Firebase for the project, follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com).  
2. Click on **"Create a project"**.  
3. Name your project and accept the Firebase terms.  
4. Enable **Google Analytics** if needed (optional).  
5. Once the project is created, click on **"Add app"**.  
   - Choose **Web** as the platform.  
   - Register the app and copy the **Firebase config object**.  
6. In your project, create a `.env` file and add your Firebase configuration:
   ```env
   REACT_APP_API_KEY=your_api_key
   REACT_APP_AUTH_DOMAIN=your_auth_domain
   REACT_APP_PROJECT_ID=your_project_id
   REACT_APP_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_APP_ID=your_app_id
   ```

7. Install Firebase in your project:
   ```bash
   npm install firebase
   ```

8. Initialize Firebase in your project:
   ```javascript
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";
   import { getAuth } from "firebase/auth";

   const firebaseConfig = {
     apiKey: process.env.REACT_APP_API_KEY,
     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
     projectId: process.env.REACT_APP_PROJECT_ID,
     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
     appId: process.env.REACT_APP_APP_ID
   };

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   export const auth = getAuth(app);
   ```

---

## 🔥 **Contributing**

We welcome all contributions!  
To contribute:
- Fork the repository.  
- Create a new branch (`git checkout -b feature-branch`).  
- Make your changes and commit them (`git commit -m "Add your message here"`).  
- Push your changes (`git push origin feature-branch`).  
- Open a pull request.  

---

## 📫 **Contact**
For any queries or suggestions, feel free to open an issue or reach out.  
Happy coding! 🚀  

---

✅ Let me know if you want any further modifications or additions! 🚀
