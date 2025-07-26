import { h, Component, render } from "preact";

export default class App extends Component {
  render({ greetingsTo = "Guest" }, state) {
    return <h1>Hello {greetingsTo}!</h1>;
  }
}

render(<App greetingsTo="World 2" />, document.getElementById("App"));
