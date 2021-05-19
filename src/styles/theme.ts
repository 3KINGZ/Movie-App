import { scale } from "react-native-size-matters";

export const COLORS = {
  primary: "#1f2340",
  secondary: "#127ada",
  textColor: "#f6f7fb",
  darkBlue: "#13142b",
};

export const FONTS = {
  tiny: {
    fontFamily: "Montserrat-Light",
    fontSize: scale(12),
    color: COLORS.textColor,
  },
  mini: {
    fontFamily: "Montserrat-Light",
    fontSize: scale(12),
    color: COLORS.textColor,
  },
  small: {
    fontFamily: "Montserrat-Light",
    fontSize: scale(15),
    color: COLORS.textColor,
  },
  regular: {
    fontFamily: "Montserrat-Regular",
    fontSize: scale(18),
    color: COLORS.textColor,
  },
  large: {
    fontFamily: "Montserrat-Bold",
    fontSize: scale(20),
    color: COLORS.textColor,
  },
  xlarge: {
    fontFamily: "Montserrat-Bold",
    fontSize: scale(24),
    color: COLORS.textColor,
  },
};
