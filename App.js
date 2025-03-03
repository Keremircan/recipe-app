import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import RootNavigation from "./src/components/navigation/RootNavigation";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark" />

        <RootNavigation />
      </SafeAreaView>
    </Provider>
  );
}
