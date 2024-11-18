

const editTodo=()=>{
    return (
        <div>
            <div className="row">
                        <div className="col-sm-10">
                            <input
                            type="text"
                            className="form-control"
                            
                            placeholder="Enter your task"
                            />
                        </div>
                        <div className="col-sm-2 text-end">
                            <button className="btn btn-dark w-100" type="submit">
                            <i className="bi bi-plus-lg"></i> Add Task
                            </button>
                        </div>
                        </div>
        </div>
        )
  }

export default editTodo