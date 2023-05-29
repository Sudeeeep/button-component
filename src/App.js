import { Button } from "./components/style/Button";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Buttons</h1>
      <h2>Default Button</h2>
      <Button>Default</Button>

      <h2>Outline Button</h2>
      <Button variant="outline">Outline</Button>

      <h2>Text Button</h2>
      <Button variant="text">Text</Button>

      <h2>Disable Shadow Button</h2>
      <Button disableShadow>Default</Button>

      <h2>Disabled Button</h2>
      <Button disabled>Disabled</Button>

      <h2>Disabled Text Button</h2>
      <Button variant="text" disabled>
        Disabled Text
      </Button>

      <h2>Button with icon</h2>
      <Button iconLeft>
        <span className="material-symbols-outlined">delete</span>
        Default
      </Button>
      <Button iconRight>
        <span className="material-symbols-outlined">favorite</span>
        Default
      </Button>

      <h2>Button Sizes</h2>

      <Button size="sm">Default</Button>
      <Button size="md">Default</Button>
      <Button size="lg">Default</Button>

      <h2>Button Colors</h2>

      <Button color="default">Default</Button>
      <Button color="primary">Default</Button>
      <Button color="secondary">Default</Button>
      <Button color="danger">Default</Button>
    </div>
  );
}

export default App;
