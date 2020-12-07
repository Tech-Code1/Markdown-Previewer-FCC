marked.setOptions({
    breaks: true,
});

const renderer = new marked.Renderer();

function App() {
    const [text, setText] = React.useState("");

    return (
        <div className="text-center px-4">
            <h1 className="p-4">Vista previa Markdown</h1>
            <textarea
                name="text"
                id="editor"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="textarea">
            </textarea>
            <h3 className="mt-3">salida</h3>
            <Preview markdown={text} />
        </div>
    );
}

function Preview({ markdown }) {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: marked(markdown, { render: renderer }),
            }}
            id="preview"
        ></div>
    )
};

