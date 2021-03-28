import { NavBar } from "../components/navBar/NavBar";

export function PageWrapper({ children }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: '#e5e5e5',
        minHeight: '100vh'
        // height: "100vh"
      }}
    >
      <NavBar />
      <div style={{ margin: "0", width: '60vw' }}>{children}</div>
    </div>
  );
}
