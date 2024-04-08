import store from "./modules/store";
import { setCurrentUser } from "./redux/authSlice";

export const userHandle = data => {
    store.dispatch(setCurrentUser(data))
}