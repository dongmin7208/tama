const TodoHeader = ({ headText, left, right }) => {
    return (
        <header>
            <div className="btn--left">{left}</div>
            <div className="btn--headText">{headText}</div>
            <div className="btn--right">{right}</div>
        </header>
    );
};

export default TodoHeader;
