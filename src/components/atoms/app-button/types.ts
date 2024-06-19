import { TextStyle, ViewStyle } from "react-native";

export interface AppButtonProps {
    label: string,
    onPressButton?: () => void,
    highLighted: boolean,
    style?: ViewStyle
    textStyle?: TextStyle
}