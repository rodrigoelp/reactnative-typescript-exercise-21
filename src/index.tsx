import * as React from "react";
import { AppRegistry, View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import * as Animatable from "react-native-animatable";

class App extends React.PureComponent {
    public render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ padding: 30 }}>
                    <TouchableWithoutFeedback>
                        <Animatable.View style={{ backgroundColor: "darkred" }} animation="bounce" iterationCount="infinite">
                            <Text style={{ textAlign: "center" }}>Button</Text>
                        </Animatable.View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('animatableApp', () => App);