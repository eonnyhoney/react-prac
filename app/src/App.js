import "./App.css";
import TOC from "./components/TOC.js";
import Content from "./components/content.js";
import Subject from "./components/subject.js";

import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      subject: { title: "web", sub: "World Wide Web!" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "Css is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interaction" },
      ],
    };
  }

  render() {
    console.log("App render");
    let _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log("render", this);
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;