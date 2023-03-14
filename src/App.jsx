import { Routes, Route } from "react-router-dom";
import User from "./User";
import UserDetail from "./UserDetail";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/detail/:id" element={<UserDetail />} />
      </Routes>
    </>
  );
};

export default App;
