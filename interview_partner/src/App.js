import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import About from "./component/About";
import Profile from "./component/Profile";
import Register from "./component/Register";
import { UserProvider } from "./component/UserProvider";
import Login from "./component/Login";
import QuestionAnswerPage from "./Gpt_Answer/QuestionAnswerPage";
import Sidebar from "./Gpt_Answer/Sidebar";
import FeedbackPage from "./Gpt_Answer/FeedbackPage";
import RetakeAnswerPage from "./Gpt_Answer/RetakeAnswerPage";
import JobSelection from "./component/JobSelection";
import JobResume from "./component/JobResume";
import JobQuestionList from "./component/JobQuestionList";

import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/jobselect" element={<JobSelection />} />
          <Route path="/jobresume" element={<JobResume />} />
          <Route path="/jobquestionlist" element={<JobQuestionList />} />
          {/* <Route
            path="/question-answer/:sectionId"
            element={<QuestionAnswerPage />}
          /> */}
          <Route path="/question-answer" element={<QuestionAnswerPage />} />

          <Route
            path="/feedback/:sectionId/:gptQuestionId"
            element={<FeedbackPage />}
          />
          <Route
            path="/retake-answer/:sectionId/:gptQuestionId"
            element={<RetakeAnswerPage />}
          />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
