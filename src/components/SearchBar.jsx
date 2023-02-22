import React, { useRef } from "react";
import { fetchHeroes } from "../utils/utils";

import Button from "./Button";

export default function SearchBar({ handleClick, setHeroes, setError }) {
  let input = useRef();
  return (
    <form>
      <input type="text" placeholder="pesquisar hero..." ref={input} />
      <Button
        text={"pesquisar"}
        handleClick={(e) => {
          handleClick(e, input.current.value)
            .then((data) => setHeroes(data.data.results))
            .catch((err) => setError(err));
        }}
      />
    </form>
  );
}