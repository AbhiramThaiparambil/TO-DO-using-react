import './todo.css';

const Tasks = ({ task, status, markAsDone, deleteTask ,editTask}) => (
  <div>
    <div className="card mt-3">
      <div className="card-body">
        <div className="row">
          <div className="col-8 col-md-10">
            <h4>
              {task}{' '}
              <span
                className={`badge ${
                  status === "done" ? "bg-success" : "bg-warning text-dark"
                }`}
              >
                {status}
              </span>
            </h4>
          </div>
          <div className="col-4 col-md-2 text-end">
            <button className="buttons ms-2 btn btn-outline-primary" onClick={editTask}>
              <i className="fas fa-edit"></i>
            </button>
            <button className="buttons ms-2 btn btn-outline-secondary" onClick={markAsDone}>
              <i className="fa-solid fa-check"></i>
            </button>
            <button className="buttons ms-2 btn btn-outline-danger" onClick={deleteTask}>
              <i className="fa-solid fa-delete-left"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Tasks;
