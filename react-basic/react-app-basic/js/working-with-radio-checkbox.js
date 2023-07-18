const rootEl = document.querySelector("#root");

const Form = {
  Input() {
    return <input />;
  },

  Checkbox() {
    return <input type="checkbox" />;
  },
};

const App = () => {
  const type = "Checkbox";
  const ComponentType = Form[type];
  return (
    <React.Fragment>
      <ComponentType></ComponentType>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
