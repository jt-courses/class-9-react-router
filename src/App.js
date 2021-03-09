import "./App.css";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";
import AppRoutes from "./AppRoutes";
import AppRouter from "./AppRouter";

/**
 * Main app entry component. This is the "root" of our React application.
 */
function App() {
  return (
    <div className="App">
      <AppRouter>
        <AppHeader />
        <AppRoutes />
        <AppFooter />
      </AppRouter>
    </div>
  );
}

export default App;
