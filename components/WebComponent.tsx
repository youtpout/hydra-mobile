import WebView from "react-native-webview";
import {Component} from "react";

export class WebComponent extends Component {
    render() {
        return <WebView source={{uri: 'https://moonrare.io/'}}/>;
    }
}