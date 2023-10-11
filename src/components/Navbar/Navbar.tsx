import { FC, FormEvent } from "react";
import { IoIosSearch } from "react-icons/io";

type Props ={
  searchKey: string;
  setSearchKey: (value: string) => void;
  searchMovies: (e: FormEvent) => void;
}

const Navbar: FC<Props> = ({ searchKey, setSearchKey, searchMovies }) => {


  return (
    <nav className="navbar sticky-top bg-dark navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="navbar-brand text-white text-decoration-none rounded nav nav-link">
          CineScape
        </h1>

        <form
          className="d-flex align-items-center border-bottom border-white"
          onSubmit={searchMovies}
        >
          <input
            type="text"
            placeholder="Search your movie..."
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            className="form-control custom-search bg-dark border-0 text-white"
          />
          <IoIosSearch size={18} className="text-white ms-2" />

          <button className="ms-2 btn btn-outline-secondary" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
