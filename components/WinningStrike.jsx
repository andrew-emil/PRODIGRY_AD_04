import { View } from "react-native";
import React from "react";
import { styles } from "../styles/GlobalStyles";

const WinningStrike = ({ combo }) => {
	function strike() {
		if (combo == null) return null;
		else {
			if (combo[0] === 0 && combo[1] === 1 && combo[2] === 2) {
				return <View style={[styles.strikecolumn1, styles.strike]}></View>;
			}
			if (combo[0] === 3 && combo[1] === 4 && combo[2] === 5) {
				return <View style={[styles.strikecolumn2, styles.strike]}></View>;
			}
			if (combo[0] === 6 && combo[1] === 7 && combo[2] === 8) {
				return <View style={[styles.strikecolumn3, styles.strike]}></View>;
			}
			if (combo[0] === 0 && combo[1] === 3 && combo[2] === 6) {
				return <View style={[styles.strikerow1, styles.strike]}></View>;
			}
			if (combo[0] === 1 && combo[1] === 4 && combo[2] === 7) {
				return <View style={[styles.strikerow2, styles.strike]}></View>;
			}
			if (combo[0] === 2 && combo[1] === 5 && combo[2] === 8) {
				return <View style={[styles.strikerow3, styles.strike]}></View>;
			}
			if (combo[0] === 0 && combo[1] === 4 && combo[2] === 8) {
				return <View style={[styles.strikediagonal1, styles.strike]}></View>;
			}
			if (combo[0] === 2 && combo[1] === 4 && combo[2] === 6) {
				return <View style={[styles.strikediagonal2, styles.strike]}></View>;
			}
		}
	}

	return <>{strike()}</>;
};

export default WinningStrike;
