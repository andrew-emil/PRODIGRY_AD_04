import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Game from "./components/Game";

export default function App() {
	return (
		<>
			<StatusBar style="light" animated={true} />
			<Game />
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
