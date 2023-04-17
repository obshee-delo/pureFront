import { Route, Routes, useParams } from "react-router-dom";
import React from "react";
import { ClientService, CourseService } from "obsheedelo-sdk";

import Nav from "./common/navigation/Nav";
import About from "./pages/About";
import CertainCourse from "./pages/CertainCourse";
import Course from "./pages/Course";
import Main from "./pages/Main";
import Intensive from "./pages/Intensive";
import Registration from "./pages/Registration";
import Profile from "./pages/Profile";
import UserCourse from "./components/userPages/UserCourse";
import UserProfile from "./components/userPages/UserProfile";
import UserCourseDetail from "./pages/UserCourseDetail";
import Videolessons from "./pages/Videolessons";
import Video from "./components/userPages/Video";
import { useAppDispatch } from "./redux/state";
import { setUsers } from "./redux/authSlice";
import { sdk } from "./sdk/sdk";
const getOb = sdk.course.findByCategory({ category: "Право" }).then((el) => el);
console.log(1);
console.log(getOb);
function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  React.useEffect(() => {
    dispatch(setUsers(user));
  }, []);
  return (
    <div className="min-h-[100vh] max-w-[100vw] overflow-x-hidden flex flex-col">
      <Nav />
      <div className=" flex-grow">
        <Routes>
          {/* ГЛАВНАЯ */}
          <Route path="/" element={<Main />} />

          <Route path={`/courses/:name/*`}>
            <Route index element={<CertainCourse />} />
            <Route path="intensive" element={<Intensive />} />
          </Route>
          {/* СТРАНИЦА О НАС */}
          <Route path="about" element={<About />} />
          {/* СТРАНИЦА КУРСА, ОБЩАЯ */}
          <Route path="course/*" element={<Course />} />
          {/* СТРАНИЦА РЕГИСТРАЦИИ */}
          <Route path="reg" element={<Registration />} />
          {/* СТРАНИЦА ПОЛЬЗОВАТЕЛЯ */}
          <Route path="user/*" element={<Profile />}>
            <Route path="profile" element={<UserProfile />} />
            <Route path="course/*">
              <Route index element={<UserCourse />} />
              <Route path="detail/*">
                <Route index element={<UserCourseDetail />} />
                <Route path="videoLessons/*">
                  <Route index element={<Videolessons />} />
                  <Route path="video" element={<Video />} />
                </Route>
              </Route>
            </Route>
          </Route>
          <Route />
        </Routes>
      </div>
    </div>
  );
}

export default App;
