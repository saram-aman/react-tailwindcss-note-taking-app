import React from "react"

export default class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes: [],
            noteInputvalue: ""
        }
        this.handleNoteInputChange = this.handleNoteInputChange.bind(this)
        this.handleAddNoteChange = this.handleAddNoteChange.bind(this)
        this.handleDeleteNoteChange = this.handleDeleteNoteChange.bind(this)
    }
    handleNoteInputChange(event){
        this.setState({
            noteInputvalue: event.target.value
        })
    }

    handleAddNoteChange(){
        const { notes, noteInputvalue } = this.state
        if (noteInputvalue.trim() !== '') {
            const newNote = {
                id: Date.now(),
                text: noteInputvalue
            }
            const updateNotes = [...notes, newNote]
            this.setState({
                notes: updateNotes,
                noteInputvalue: ''
            })
        }
    }

    handleDeleteNoteChange(id){
        const { notes } = this.state
        const updateNotes = notes.filter((note) => note.id !== id)
        this.setState({
            notes: updateNotes
        })
    }
    render(){
        const { notes, noteInputvalue } = this.state
        return(
            <>
                <h1 className="text-center mt-20 text-3xl font-bold">Note-Taking App</h1>
                <div className="flex justify-center items-center">
                    <textarea className="block w-5/6 h-32 sm:h-48 p-4 mx-32 my-16 text-base rounded-md border border-gray-300 resize-none focus:outline-none" value={noteInputvalue} onChange={this.handleNoteInputChange} placeholder="Write your note here..."></textarea>
                </div>
                <button className="block mx-auto my-4 sm:my-4 px-10 py-2 px-6 bg-green-500 text-white rounded-md focus:outline-none hover:bg-green-600 cursor-pointer" onClick={this.handleAddNoteChange}>Add Note</button>
                <ul className="list-none mx-32 p-0">
                    {notes.map((note) => {
                        return(
                            <>
                                <li key={note.id} className="my-4 px-6 py-8 bg-gray-100 rounded-md shadow-md overflow-hidden relative">
                                    <p className="text-base break-words mr-16 sm:mr-24">{note.text}</p>
                                    <button onClick={() => this.handleDeleteNoteChange(note.id)} className="absolute flex items-center top-1/2 sm:top-6 p-1 sm:px-4 sm:py-3 right-6 bg-red-500 text-white rounded-md focus:outline-none hover:bg-red-700 cursor-pointer">Delete</button>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </>
        )
    }
}