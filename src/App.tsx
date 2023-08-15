import MainLayout from "./layouts/MainLayout";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/Features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>
        <MainLayout></MainLayout>
      </div>
    </>
  );
}

export default App;
