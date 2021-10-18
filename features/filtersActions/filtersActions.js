const FiltersActions = ({
    view,
    setView,
    clear,
    remaining
}) => {
    return (
        <div className="flex flex-wrap justify-between items-center w-full text-xs px-5">
            <div className="w-full md:w-2/12 my-5 md:py-5 text-center">{remaining} item{remaining !== 1 && 's'} left</div>
            <div className="w-full md:w-8/12 flex justify-evenly py-3 border-t-2 border-b-2">
                {
                    ['All', 'Active', 'Inactive'].map((button, i) => {
                        return <button
                            key={"button" + i}
                            onClick={() => setView(button)}
                            className="p-2 rounded-xl border-box md:w-1/5"
                            style={view === button ? { border: '1px solid white' } : {}}
                        >
                            {button}
                        </button>
                    })
                }
            </div>
            <button
                onClick={() => clear()}
                className="w-full my-5 md:w-2/12 underline"
            >
                Clear completed
            </button>
        </div>
    )
}

export default FiltersActions