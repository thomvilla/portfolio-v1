import React from "react";
import ReactDOM from "react-dom";

const theme = {
  button: {
    backgroundColor: "white",
    borderColor: "red",
    color: "blue"
  }
};

const style = {
  borderWidth: "2px",
  borderStyle: "solid",
  padding: "10px",
  fontSize: "24px"
};

const createButtonStyleFromTheme = ({ button }) => ({
  borderColor: button.borderColor,
  backgroundColor: button.backgroundColor,
  color: button.color,
  ...style
});

const buttonStyle = createButtonStyleFromTheme(theme);

const Button = props => <button style={buttonStyle}>{props.children}</button>;

const App = () => <Button>Button</Button>;

ReactDOM.render(<App />, document.getElementById("root"));
