import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLink({path, label, exact=false}) {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (exact) {
      setActive(location.pathname === path)
    } else {
      setActive(location.pathname.includes(path))
    }
  }, [active])

  return (
    <Link className={`nav-link ${active ? 'active' : ''}`} aria-current="page" to={path}>{label}</Link>
  );
}
