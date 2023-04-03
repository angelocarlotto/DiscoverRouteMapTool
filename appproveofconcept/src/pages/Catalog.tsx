import { Link } from "react-router-dom";

export function Catalog() {
  return (
    <div>
      <h1>Catalog</h1>
      <Link to="/cart">cart</Link>
    </div>
  );
}
