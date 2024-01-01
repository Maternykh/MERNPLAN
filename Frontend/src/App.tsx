import { RootState } from "./Redux/store";
import { useAppSelector } from "./Type";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import FullDays from "./pages/FullDays";
import AddDays from "./pages/AddDays";
import PutDays from "./pages/PutDays";
import DelDays from "./pages/DelDays";
import Calendar from "./pages/Calendar";

import AddNote from "./pages/AddNote";
import FullPurp from "./pages/FullPurp";
import PutPurps from "./pages/PutPurps";
import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Patterns from "./pages/Patterns";
import DelPatt from "./pages/DelPatt";
import PutPattern from "./pages/PutPattern";
function App() {
  const isAuth = useAppSelector((state: RootState) => state.userAuth.isAuth);
  return (
    <div className="bg-gray-300 min-h-screen  xl:px-16 xl:py-20">
      {!isAuth ? (
        <Start />
      ) : (
        <div className=" bg-gray-200 min-h-screen xl:rounded-3xl p-3 w-full">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/checkfullday/:id" element={<FullDays />}></Route>
            <Route path="/addDay" element={<AddDays />}></Route>
            <Route path="/deleteDay/:id" element={<DelDays />}></Route>
            <Route path="/deletePattern/:id" element={<DelPatt />}></Route>
            <Route path="/putDay/:id" element={<PutDays />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/patterns" element={<Patterns />}></Route>
            <Route path="/addNote" element={<AddNote />}></Route>
            <Route path="/checkfullpurps/:id" element={<FullPurp />}></Route>
            <Route path="/putPurps/:id" element={<PutPurps />}></Route>
            <Route path="/putPattern/:id" element={<PutPattern />}></Route>
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
