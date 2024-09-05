import React from "react";

interface Props {
  style?: object;
  invert?: boolean;
  center?: boolean;
  textType?: string;
  numberofLines?: number;
  children: any;
}

const AAText = ({
  style,
  center,
  invert,
  textType,
  children,
  numberofLines,
}: Props) => {
  const texttype = textType ? textType : "regular";

  return (
    <p
    //   style={[styles.default(center, invert), styles[texttype], style]}
    //   numberOfLines={numberofLines}
    >
      {children}
    </p>
  );
};

// const styles = StyleSheet.create<Styles>({
//   default: (center: boolean, invert: boolean) => ({
//     lineHeight: 20,
//     fontFamily: FontStyles.fontLight,
//     fontSize: FontStyles.mediumFontSize,
//     textAlign: center ? "center" : "auto",
//     color: invert ? FontStyles.white : FontStyles.fontDark,
//   }),
//   regular: {
//     lineHeight: 25,
//     color: FontStyles.fontRegularColor,
//     fontFamily: FontStyles.fontRegular,
//     fontSize: FontStyles.mediumFontSize,
//   },
//   medium: {
//     lineHeight: 22,
//     fontWeight: "400",
//     color: FontStyles.fontDark,
//     fontFamily: FontStyles.fontMedium,
//     fontSize: FontStyles.mediumFontSize,
//   },
//   semismall: {
//     lineHeight: 18,
//     fontWeight: "400",
//     color: FontStyles.fontDark,
//     fontFamily: FontStyles.fontMedium,
//     fontSize: FontStyles.smallFontSize,
//   },
//   small: {
//     lineHeight: 18,
//     color: FontStyles.fontDark,
//     fontFamily: FontStyles.fontMedium,
//     fontSize: FontStyles.smallFontSize,
//   },
//   smallRegular: {
//     lineHeight: 18,
//     color: FontStyles.fontDark,
//     fontFamily: FontStyles.inputFont,
//     fontSize: FontStyles.smallFontSize,
//   },
//   semibold: {
//     lineHeight: 25,
//     fontWeight: "500",
//     fontFamily: FontStyles.fontSemiBold,
//     fontSize: FontStyles.mediumFontSize,
//   },
//   bold: {
//     lineHeight: 25,
//     fontWeight: "600",
//     fontFamily: FontStyles.fontBold,
//     fontSize: FontStyles.primaryFontSize,
//   },
//   smallLight: {
//     lineHeight: 18,
//     color: FontStyles.fontDark,
//     fontFamily: FontStyles.fontLight,
//     fontSize: FontStyles.smallFontSize,
//   },
// });

// AAText.defaultProps = {
//   type: "default",
// };

export default AAText;
