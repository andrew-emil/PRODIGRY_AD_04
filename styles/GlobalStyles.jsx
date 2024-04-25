import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#192730",
		flexDirection: "column",
	},
	gameBoard: {
		width: 304,
		height: 304,
		flexWrap: "wrap",
		borderColor: "white",
		borderWidth: 2,
	},
	cell: {
		fontSize: 80,
		fontWeight: "bold",
		borderColor: "white",
		borderWidth: 4,
		height: 100,
		width: 100,
		justifyContent: "center",
	},
	gameResult: {
		marginTop: 10,
		padding: 10,
		fontSize: 24,
		color: "white",
	},
	gameInput: {
		textAlign: "center",
		fontSize: 50,
		fontWeight: "bold",
	},
	circle: {
		color: "blue",
	},
	cross: {
		color: "red",
	},
	text: {
		fontSize: 40,
		color: "white",
		bottom: "200%",
	},
	button: {
		backgroundColor: "#8052ec",
		width: 130,
		height: 48,
		borderRadius: 10,
		elevation: 3,
		marginTop: 40,
		padding: 10,
	},
	buttonText: {
		color: "#111",
		fontSize: 18,
		textAlign: "center",
		fontWeight: "bold",
	},
	strike: {
		position: "absolute",
		backgroundColor: "darkorange",
	},
	strikerow1: {
		width: 280,
		height: 5,
		top: "32%",
	},
	strikerow2: {
		width: "80%",
		height: 5,
		top: "44%",
	},
	strikerow3: {
		width: "80%",
		height: 5,
		top: "57%",
	},
	strikecolumn1: {
		height: 285,
		width: 5,
		left: "21%",
		bottom: "38%",
	},
	strikecolumn2: {
		height: 285,
		width: 5,
		left: "50%",
		bottom: "38%",
	},
	strikecolumn3: {
		height: 285,
		width: 5,
		left: "77%",
		bottom: "38%",
	},
	strikediagonal1: {
		width: "80%",
		height: 5,
		top: "44%",
		transform: [{ skewY: "45deg" }],
	},
	strikediagonal2: {
		width: "80%",
		height: 5,
		top: "44%",
		transform: [{ skewY: "-45deg" }],
	},
});
