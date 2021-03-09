import "./App.css";
import AppRoutes from "./AppRoutes";
import AppRouter from "./AppRouter";

/**
 * Main app entry component. This is the "root" of our React application.
 */
function App() {
  return (
    <div className="App">
      <AppRouter>
        <AppRoutes />
      </AppRouter>
    </div>
  );
}

export default App;
