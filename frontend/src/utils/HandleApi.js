import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDo = (title,text,setTitle, setText, setToDo) => {

    axios
        .post(`${baseUrl}/save`, { title,text })
        .then((data) => {
            console.log(data);
            setTitle("")
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const updateToDo = (toDoId,title,text,setToDo,setTitle, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: toDoId,title, text})
        .then((data) => {
            console.log(data);
            setTitle("")
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}

const deleteToDo = (_id, setToDo) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}


export { getAllToDo,addToDo,updateToDo,deleteToDo }