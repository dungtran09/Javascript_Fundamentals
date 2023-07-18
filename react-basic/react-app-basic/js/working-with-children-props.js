const rootEl = document.querySelector("#root");

const App = () => {
  const langs = [
    "C/C++",
    "Data Structures",
    "OOP/Java",
    "JavaScript",
    "HTML/CSS",
    "ReactJS",
  ];

  return (
    <React.Fragment>
      <ListLangs langs={langs}>
        {(lang) => {
          return <li>{lang}</li>;
        }}
      </ListLangs>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(rootEl);
root.render(<App />);

const ListLangs = ({ langs, children }) => {
  return (
    <ul>
      {langs.map((lang) => {
        return children(lang);
      })}
    </ul>
  );
};
