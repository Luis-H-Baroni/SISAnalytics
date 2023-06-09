function TopTitleButton({ title = 'Title', button = 'Button', onClickFunction = () => { } }) {
  // const handleOnClick = (e) => {
  //   console.log('handleOnClick')
  //   onClickFunction(e);
  // };

  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="text-lg text-purple-700">
        <h1>{ title }</h1>
      </div>
      <div className="flex justify-end">
        <button 
          className="
            bg-transparent 
            hover:bg-purple-500 
            text-purple-700 font-semibold hover:text-white py-2 px-4 border 
            border-purple-500 hover:border-transparent rounded
          "
          onClick={ onClickFunction }
        >
          { button }
        </button>
      </div>
    </div>
  );
}

export default TopTitleButton;