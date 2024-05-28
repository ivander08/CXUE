import Register from "./screens/auth/Register";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    interBlack: require("./assets/fonts/Inter-Black.ttf"),
    interExtraLight: require("./assets/fonts/Inter-ExtraLight.ttf"),
  });
  return <Register />;
}
