import { Navigation } from "react-native-navigation";

import MyArea from "../components/Timeline";
import AppointmentDetail from "../components/AppointmentDetail";
// import PushedScreen from "./PushedScreen";

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent("example.MyArea", () => MyArea);
  Navigation.registerComponent("example.AppointmentDetail", () => AppointmentDetail);
  Navigation.registerComponent("example.PushedScreen", () => MyArea);
}
