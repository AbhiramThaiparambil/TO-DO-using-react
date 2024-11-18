import './todo.css'


const Header=()=>
  (  <div className="col-sm-12">
    <nav className="navbar navbar-light rounded shadow navColor">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="https://t4.ftcdn.net/jpg/02/18/12/59/360_F_218125902_9k6teJpNNQCcg4YgMI3HypyTUNMCRkdR.jpg"
            alt="Bootstrap Logo"
            width="50"
            height="24"
            className="d-inline-block align-text-top me-2"
          />
          <span className="fw-bold headText">Task Manager</span>
        </a>
      </div>
    </nav>
  </div>)



  export default Header