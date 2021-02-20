const Options = (props) => {
    const options = [
        {
            text : "Javascript",
            handler : props.actionProvider.handleJavascriptQuiz,
            id:1,
        },
        { 
            text: "Python",
            handler : () => {},
            id:2
        },
        { 
            text: "Go Lang",
            handler : () => {},
            id:3
        }
    ];

    const buttonsMarkup = options.map((option) => (
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ));

    return <div className="options-container">{buttonsMarkup}</div>
}