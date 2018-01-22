import * as React from "react";
import { AppRegistry, View, ScrollView } from "react-native";
import ButtonWithAnimation from "./button";

class App extends React.PureComponent {
    public render() {
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, padding: 30 }}>
                    <ButtonWithAnimation text="This is bouncy!" animation="bounce" backgroundColor="#848889" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="This is bouncy from the left!" animation="bounceInLeft" backgroundColor="#8b233f" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Fading in!" animation="fadeIn" backgroundColor="#ae8f63" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Flashie!" animation="flash" backgroundColor="#1f101a" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Flipping In X!" animation="flipInX" backgroundColor="#5a5b62" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Flipping In Y" animation="flipInY" backgroundColor="#c1c5d6" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Jello" animation="jello" backgroundColor="#787fa0" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Light Speed in" animation="lightSpeedIn" backgroundColor="#493319" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Pulsing..." animation="pulse" backgroundColor="#907f60" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Rotate" animation="rotate" backgroundColor="#9d0200" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Rubber band" animation="rubberBand" backgroundColor="#c17900" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="shake that thing!" animation="shake" backgroundColor="#223f4a" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Swing" animation="swing" backgroundColor="#f0bb29" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Tadaaaa!" animation="tada" backgroundColor="#b6d1df" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Wobble!" animation="wobble" backgroundColor="#633158" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                    <ButtonWithAnimation text="Zoom In!!" animation="zoomIn" backgroundColor="#ae75a0" foregroundColor="white" containerStyle={{ marginVertical: 10 }} />
                </View>
            </ScrollView>
        );
    }
}

AppRegistry.registerComponent('animatableApp', () => App);