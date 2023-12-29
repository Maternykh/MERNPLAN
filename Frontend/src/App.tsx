import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import FullDays from "./pages/FullDays";
import AddDays from "./pages/AddDays";
import PutDays from "./pages/PutDays";
import DelDays from "./pages/DelDays";
import Calendar from "./pages/Calendar";
import Message from "./pages/Message";
import AddNote from "./pages/AddNote";
import FullPurp from "./pages/FullPurp";
import PutPurps from "./pages/PutPurps";

function App() {
  return (
    <div className="bg-gray-300 min-h-screen  xl:px-16 xl:py-20">
      <div className=" bg-gray-200 min-h-screen xl:rounded-3xl p-3 w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/checkfullday/:id" element={<FullDays />}></Route>
          <Route path="/addDay" element={<AddDays />}></Route>
          <Route path="/deleteDay/:id" element={<DelDays />}></Route>
          <Route path="/putDay/:id" element={<PutDays />}></Route>
          <Route path="/calendar" element={<Calendar />}></Route>
          <Route path="/messages" element={<Message />}></Route>
          <Route path="/addNote" element={<AddNote />}></Route>
          <Route path="/checkfullpurps/:id" element={<FullPurp />}></Route>
          <Route path="/putPurps/:id" element={<PutPurps />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
