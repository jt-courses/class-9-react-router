import "./AppHeader.css";
import AppNavigation from "./AppNavigation";

export default function AppHeader() {
  return (
    <header className="AppHeader">
      <div className="AppHeader__Wrapper">
        <div className="AppHeader__Logo">
          <img src="/logo.png" alt="My Application Logo" />
        </div>
        <AppNavigation />
      </div>
    </header>
  );
}
