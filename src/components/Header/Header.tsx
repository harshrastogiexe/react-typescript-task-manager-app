import { useEffect, useRef, useState } from "react";
import "./Header.scss";

const Header: React.FC = () => {
  const [term, setTerm] = useState("");

  const inputElm = useRef(null);

  const popSearch = (e: KeyboardEvent) => {
    if (e.key === "/") {
      ((inputElm.current as unknown) as HTMLInputElement).focus();
    }
    console.log(e.key);
  };

  useEffect(() => {
    document.addEventListener("keyup", popSearch);
    return () => {
      document.removeEventListener("keyup", popSearch);
    };
  }, []);

  return (
    <nav className='navbar'>
      <h2 className='navbar-title'>Turing Todo</h2>
      <div className='navbar-searchContainer'>
        <input
          ref={inputElm}
          type='text'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Press / To Search'
        />
      </div>
    </nav>
  );
};

export default Header;
