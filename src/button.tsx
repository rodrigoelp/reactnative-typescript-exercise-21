import * as React from "react";
import { View, ViewStyle, Text, TouchableWithoutFeedback } from "react-native";
import * as Animatable from "react-native-animatable";

interface ButtonWithAnimationProps {
    text: string;
    animation: Animatable.Animation;
    backgroundColor: string;
    foregroundColor: string;
    containerStyle?: ViewStyle;
}

export default class ButtonWithAnimation extends React.PureComponent<ButtonWithAnimationProps> {
    constructor(props: ButtonWithAnimationProps) {
        super(props);
    }

    public render() {
        return (
            <Animatable.View style={[{ backgroundColor: this.props.backgroundColor, borderRadius: 5, padding: 10 }, this.props.containerStyle]} animation={this.props.animation} iterationCount="infinite">
                <TouchableWithoutFeedback style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ textAlign: "center", color: this.props.foregroundColor }}>{this.props.text}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </Animatable.View>
        );
    }
}