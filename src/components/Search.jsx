const Search = ({ setSearch }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="text-center my-10">
      <input
        onChange={handleInputChange}
        className="min-w-[300px] w-[60%] py-1 px-5 text-center outline-none rounded-lg caret-slate-600"
        type="text"
      />
    </div>
  );
};

export default Search;
