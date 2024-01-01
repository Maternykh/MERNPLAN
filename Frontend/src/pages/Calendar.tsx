import { useAppSelector } from "../Type";
import { RootState } from "../Redux/store";
import Minidays from "../components/Days/Minidays";

const Calendar: React.FC = () => {
  const days = useAppSelector((state: RootState) => state.days.days);
  const searchValue = useAppSelector(
    (state: RootState) => state.filter.searchValue
  );
  const dayMap = days
    .filter((obj) => {
      if (obj.dayName.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((day) => <Minidays {...day} key={day._id} />);
  return (
    <div className=" grid grid-cols-2 xl:grid-cols-8 gap-2 bg-white p-3 rounded-xl">
      {dayMap}
    </div>
  );
};
export default Calendar;
