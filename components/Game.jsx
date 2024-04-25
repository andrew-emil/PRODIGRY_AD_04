import { useEffect, useState } from "react";
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { styles } from "../styles/GlobalStyles";
import WinningStrike from "./WinningStrike";

const Game = () => {
	const winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
	const [go, setGo] = useState("circle");
	const [winnigMessage, setMessage] = useState("");
	

	const handleClick = (index) => {
		if (winnigMessage === "") {
			let newCells = [...cells];
			if (newCells[index] === "") {
				newCells[index] = go;
				setGo(go === "circle" ? "cross" : "circle");
				setCells(newCells);
			}
		}
	};

	const resetGame = () => {
		setCells(["", "", "", "", "", "", "", "", ""]);
		setGo("circle")
		setMessage("")
	}

	const calculateWinner = (cells) => {
		let winningCombo = [];
		for (let i = 0; i < winningCombos.length; i++) {
			const [a, b, c] = winningCombos[i];
			if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
				winningCombo[0] = a
				winningCombo[1] = b
				winningCombo[2] = c
				return winningCombo
			}
		}
		return null;
	}


	useEffect(() => {
		winningCombos.forEach((combo) => {
			const circleWins = combo.every((cell) => cells[cell] === "circle");
			const crossWins = combo.every((cell) => cells[cell] === "cross");
			if (circleWins) {
				setMessage("O" + " Wins! 🥳");
				} else if (crossWins) {
					setMessage("X" + " Wins! 🥳");
			} else if (cells.every((cell) => cell !== "" && winnigMessage === "")) {
				setMessage("Draw!");
			}
		});
	}, [cells, winnigMessage]);

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.text}>Tic Tac Toe</Text>
			</View>
			<View style={styles.gameBoard}>
				{cells.map((cell, index) => (
					<TouchableOpacity
						style={styles.cell}
						key={index}
						onPress={() => handleClick(index)}>
						{cell === "circle" ? (
							<Text style={[styles.gameInput, styles.circle]}>O</Text>
						) : cell === "cross" ? (
							<Text style={[styles.gameInput, styles.cross]}>X</Text>
						) : null}
					</TouchableOpacity>
				))}
			</View>
			{!winnigMessage && (
				<Text style={styles.gameResult}>
					Next Player : {go === "circle" ? "O" : "X"}
				</Text>
			)}
			{winnigMessage && (
				<>
					<Text style={styles.gameResult}>{winnigMessage}</Text>
					<TouchableOpacity style={styles.button} onPress={resetGame}>
						<Text style={styles.buttonText}>Restart Game</Text>
					</TouchableOpacity>
					<WinningStrike combo={calculateWinner(cells)}/>
				</>
			)}
		</SafeAreaView>
	);
};

export default Game;