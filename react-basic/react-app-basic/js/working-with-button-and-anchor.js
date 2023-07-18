const rootEl = document.querySelector("#root");
console.log(rootEl);

const App = () => {
  return (
    <React.Fragment>
      <Button
        title="Click me"
        // href="https://www.google.com/"
        onClick={() => console.log(Math.random())}
      ></Button>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(rootEl);
root.render(<App />);

const Button = ({ title, href, onClick }) => {
  let ComponentType = "button";
  const props = {};

  if (href) {
    ComponentType = "a";
    props.href = href;
  }
  if (onClick) {
    props.onClick = onClick;
  }

  return <ComponentType {...props}>{title}</ComponentType>;
};
