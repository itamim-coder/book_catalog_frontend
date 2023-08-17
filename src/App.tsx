import { onAuthStateChanged } from "firebase/auth";
import MainLayout from "./layouts/MainLayout";
import { setLoading, setUser } from "./redux/Features/user/userSlice";
import { useAppDispatch } from "./redux/hook";
import { auth } from "./lib/firebase";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        dispatch(setUser(user.email));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  });

  return (
    <>
      <div>
        <MainLayout></MainLayout>
      <ToastContainer />
      </div>
    </>
  );
}

export default App;
