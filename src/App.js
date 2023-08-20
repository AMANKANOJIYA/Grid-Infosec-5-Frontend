import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [security, setSecurity] = useState();
  const [logs, setLogs] = useState();
  const [Progress, setProgress] = useState(false);
  const SecuritychangeHandler = (event) => {
    setSecurity(event.target.files[0]);
  };
  const LogschangeHandler = (event) => {
    setLogs(event.target.files[0]);
  };

  const send = () => {
    console.log("hi");
    setProgress(true);
  };
  return (
    <div className="App">
      <div className="navv">
        <nav className="navbar" style={{ backgroundColor: "#e3f2fd" }}>
          LOG ANALYSIS
        </nav>
      </div>
      <div className="inputs">
        <div className="files">
          <div class="mb-3">
            <label for="formFile" class="form-label">
              SECURITY POLICIES
            </label>
            <input
              class="form-control"
              type="file"
              id="formFile"
              onChange={SecuritychangeHandler}
            />
          </div>
        </div>
        <div className="files">
          <div class="mb-3">
            <label for="formFile" class="form-label">
              LOG FILE
            </label>
            <input
              class="form-control"
              type="file"
              id="formFile"
              onChange={LogschangeHandler}
            />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="button">
          <Button variant="text" onClick={send}>
            Submit
          </Button>
        </div>
        <div className="Output">
          {Progress && <CircularProgress size="6rem" />}
        </div>
      </div>
    </div>
  );
}

export default App;
