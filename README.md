

---

# Simple Note App

Simple Note App is a web application built with React, Node.js, Express.js, and MongoDB Atlas. It allows users to create, view, edit, and delete notes. The application also utilizes various libraries such as js-cookie, react-router-dom, sweetalert2, moment.js, react-dom, and CKEditor.

![Simple Note App Screenshot](./screenshot.png)![Screenshot 2024-03-28 230244](https://github.com/DhanushkaTA/Simple-Note-App-Back-End/assets/124340158/a09d5549-b52d-4349-b93d-f3b56c5561cb)

![Screenshot 2024-03-28 230321](https://github.com/DhanushkaTA/Simple-Note-App-Back-End/assets/124340158/4d957c55-f394-4ea4-b069-894f15ee5768)

![Screenshot 2024-03-28 230334](https://github.com/DhanushkaTA/Simple-Note-App-Back-End/assets/124340158/3b74b4d2-8977-4d02-ad07-65370c6a1934)

![Screenshot 2024-03-28 230341](https://github.com/DhanushkaTA/Simple-Note-App-Back-End/assets/124340158/fe84a7e2-bd79-45cb-a698-c6585dd05907)

![Screenshot 2024-03-28 230422](https://github.com/DhanushkaTA/Simple-Note-App-Back-End/assets/124340158/4e4735dc-4698-40ff-81ac-bf6b9d7e02c7)

![Screenshot_20240328_223832_com huawei browser](https://github.com/DhanushkaTA/Simple-Note-App-Back-End/assets/124340158/69f79cd3-1637-4e77-bd0e-ffa9ca90247e)

![Screenshot_20240328_223854_com huawei browser](https://github.com/DhanushkaTA/Simple-Note-App-Back-End/assets/124340158/94a0559b-2f17-4e1e-91dc-f4c2c16d8de1)

![Screenshot_20240328_224546_com huawei browser](https://github.com/DhanushkaTA/Simple-Note-App-Back-End/assets/124340158/45932144-12be-4565-aeb5-5ace21f30315)


## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **CRUD Operations**: Create, Read, Update, and Delete notes functionality.
- **Rich Text Editor**: Utilizes CKEditor for editing note content.
- **Date and Time Formatting**: Uses moment.js to display dates and times in a user-friendly format.
- **Responsive Design**: Ensures a seamless user experience across different devices.
- **Error Handling**: Provides informative error messages for a smoother user experience.

## Technologies Used

- **Frontend**:
  - React
  - react-router-dom
  - CKEditor
  - js-cookie
  - sweetalert2

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB Atlas

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DhanushkaTA/Simple-Note-App-Back-End.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-note-app
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

4. Create a `.env` file in the `server` directory and set the following environment variables:

   ```plaintext
   MONGO_URL=mongodb+srv://dhanu909ab:8KSRU7uZrLnEAT9B@cluster0.inxjg0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   SECRET=noteapp
   ```

5. Start the backend server:

   ```bash
   npm start
   ```

6. Start the frontend development server:

   ```bash
   npm run dev
   ```

7. Access the application at `(https://simple-note-app-front-end.vercel.app/)`.

## Usage

- Sign up for a new account or log in with existing credentials.
- Create a new note by clicking the "New Note" button.
- Click on a note to view or edit its content.
- Edit or delete notes using the buttons provided.
- Log out when finished using the application.

## Contributors

- [Tharindu Dhanushka](https://github.com/DhanushkaTA)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---
