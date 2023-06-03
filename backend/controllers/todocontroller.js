const todomodel=require('../models/todomodel')
module.exports.getToDo = async(req,res) => {
    const toDo=await todomodel.find();
    res.send(toDo)
}

module.exports.saveToDo=async(req,res)=>{
    const { text } =req.body

    todomodel
        
        .create({ text })
        .then((data) => {
            console.log("added successfully...");
            console.log(data)
            res.send(data)
        })
    }
    module.exports.updateToDo =async (req, res) => {
        const { _id,text } = req.body;
        try {
            const updatedToDo = await todomodel.findByIdAndUpdate(
              _id,
              { text, date: new Date() }, // Update the 'text' and 'date' fields
              { new: true }
            );
            res.send(updatedToDo);
          } catch (err) {
            console.log(err);
            res.status(500).send("Internal Server Error");
          }
    }

    module.exports.deleteToDo = async(req, res) => {
        const { _id } = req.body;
    
        console.log('id ---> ', _id);
    
        todomodel
            .findByIdAndDelete(_id)
            .then(() => res.send("Deleted Successfully..."))
            .catch((err) => console.log(err));
    }
    