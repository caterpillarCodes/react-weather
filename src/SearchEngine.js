import React from "react";
import "./SearchEngine.css";
import { BsSearch } from "react-icons/bs";

export default function SearchEngine() {
  return (
    <form className="SearchEngine">
      <a className="search-btn" href="./">
        <BsSearch />
      </a>
      <input
        type="search"
        className="search-box"
        placeholder="Search for location..."
        required
      />
    </form>
  );
}
