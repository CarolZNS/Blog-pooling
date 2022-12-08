import "./index.css";
import { mockedNews } from "./constants";
import NewsList from "./components/NewsList";

export default function App() {
  return (
    <div className="App">
      <h1>Blog de exercício</h1>
      <section aria-label="News Section">
        <NewsList data={mockedNews} />
      </section>
    </div>
  );
}
