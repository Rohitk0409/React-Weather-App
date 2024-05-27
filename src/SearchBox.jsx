import './SearchBox.css';
function SearchBox({onClick,refer}) {
  return (
    <form action="" method="get" onSubmit={onClick}>
        <input type="text" id="searchBox" placeholder=" Search your City" ref={refer} />
      <button className='btn'>search</button>
    
    </form>
  );
}
export default SearchBox;