import { Link } from "react-router-dom";
import { HeaderStyle } from "./HeaderStyle";
import { useState } from "react";

export default function Header() {
  const [hover, setHover] = useState(null);

  return (
    <HeaderStyle>
      <Link to="/">
        <img src="../../src/assets/media/logo-starbucks.png" alt="logomarca" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              style={{ color: hover === 0 ? "green" : "black" }}
              onMouseOver={() => setHover(0)}
              onMouseOut={() => setHover(null)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/novidades"
              style={{ color: hover === 1 ? "green" : "black" }}
              onMouseOver={() => setHover(1)}
              onMouseOut={() => setHover(null)}
            >
              Novidades
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              style={{ color: hover === 2 ? "green" : "black" }}
              onMouseOver={() => setHover(2)}
              onMouseOut={() => setHover(null)}
            >
              Sobre
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}
