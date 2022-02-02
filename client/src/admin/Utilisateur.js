import React,{useState,useEffect} from 'react'
import { Button,Modal,Form } from 'react-bootstrap'
import {allUsers,SingnUp,deleteHandler} from "../redux/action"
import {useDispatch,useSelector} from 'react-redux'
function Utilisateur({match,setPath}) {
    const dispatch = useDispatch()
    setPath(match.path)
    const userIsConnected = JSON.parse(localStorage.getItem('student')); 
    useEffect(() => { 
        dispatch(allUsers(userIsConnected.accessToken))
    }, [])
    
    const Users = useSelector(state=> state.users)  


    
    function NewUser() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const [firstname,setFirstName] = useState('')
        const [lastname,setLastName] = useState('')
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [roles,setRoles] = useState('')

        const addNewUser = () =>{
            dispatch(SingnUp({
                firstname: firstname,
                lastname: lastname, 
                email: email,
                roles: [roles.toLowerCase()],
                password: password 
            }))
            handleClose()
            window.setTimeout(refreshPage(), 5000); 
        }
        return (
          <>
           <Button variant='outline-danger' onClick={handleShow}>Nouvel utilisateur</Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>NOUVEL UTILISATEUR</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicNom">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" onChange={(e)=> setFirstName(e.target.value)} placeholder="Enter Nom" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrenom">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control type="text" onChange={(e)=> setLastName(e.target.value)} placeholder="Enter Prénom" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                    </Form.Group>
                    <Form.Label>Role</Form.Label>
                    <Form.Select className="mb-3" onChange={(e)=> setRoles(e.target.value)} controlId="formBasicRole">
                        <option selected disabled defaultValue="">Select The role</option>
                        <option defaultValue="teacher">Teacher</option>
                        <option defaultValue="gestionaire">Gestionaire</option>
                        <option value="superadmin">Admin</option>  
                    </Form.Select>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={addNewUser}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }

      function Example({user}) {
        const [show, setShow] = useState(false);
        
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const [firstname,setFirstName] = useState('')
        const [lastname,setLastName] = useState('')
        const [email,setEmail] = useState('')
        const [password,setPassword] = useState('')
        const [roles,setRoles] = useState('')

        return (
          <>
            <button onClick={handleShow}><i class="fa fa-cog"></i></button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicNom">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control type="text" onChange={(e)=> setFirstName(e.target.value)} placeholder="Enter Nom" value={user.firstname}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPrenom">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" onChange={(e)=> setLastName(e.target.value)} placeholder="Enter Prénom" value={user.lastname} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter email" value={user.email}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e)=> setPassword(e.target.value)} placeholder="Password" value={user.password} />
                        </Form.Group>
                        <Form.Label>Role</Form.Label>
                        <Form.Select className="mb-3" onChange={(e)=> setRoles(e.target.value)} controlId="formBasicRole">
                            <option disabled defaultValue="">Select The role</option>
                            {user.roles[0].name == 'teacher'? <option defaultValue="teacher" selected>Teacher</option> : <option defaultValue="teacher" selected>Teacher</option> }
                            {user.roles[0].name == 'gestionaire'? <option defaultValue="gestionaire" selected>Gestionaire</option> : <option defaultValue="gestionaire">Gestionaire</option> }
                            {user.roles[0].name == 'superadmin'? <option defaultValue="superadmin" selected>Admin</option> : <option defaultValue="superadmin">Admin</option> }
                        </Form.Select>
                    </Form>
                </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      const DeleteUsers = (email) =>{
          dispatch(deleteHandler(email)) 
          window.setTimeout(refreshPage(), 5000); 
      }
      function refreshPage() {
        window.location.reload(false);
      }
       
    return (
        <div className="utilisateur container-fluid">
                <div className="col-md-12">
                    <div className="table-head table-head-tret">
                        <span className="pull-left">Tous les utilisateurs </span>
                        <span className="pull-right">  
                            <NewUser />
                        </span>
                    </div>
                    <div className="container">
                        <table className="table table-user">
                        <thead>
                            <th>Nom d'utilisateur</th>
                            <th>Email</th>
                            <th>Titre</th>
                            <th>super administrateur</th>
                            <th>Action</th>
                        </thead>
                        {Users?.map((user) => {
                            if(user?.roles[0].name !== 'student') { 
                                return( 
                                    <tr id={user?._id} className="odd"> 
                                    <td>{user?.firstname.charAt(0).toUpperCase() + user?.firstname.slice(1)} {user?.lastname.charAt(0).toUpperCase() + user?.lastname.slice(1)}</td>
                                    <td>{user?.email.charAt(0).toUpperCase() + user?.email.slice(1)}</td>
                                    <td>{user?.roles[0].name.charAt(0).toUpperCase() + user?.roles[0].name.slice(1)}</td> 
                                    <td className="label label-success">{user?.roles[0].name == 'superadmin' ? 'yes'.charAt(0).toUpperCase() + 'yes'.slice(1) : 'no'.charAt(0).toUpperCase() + 'no'.slice(1)}</td>
                                    <td className="action"> 
                                        <button onClick={()=> DeleteUsers(user?.email)}><i class="fa fa-times"></i></button>
                                        <Example user={user}/> 
                                    </td>
                                </tr>
                                ) 
                            }
                        }
                        )}
                       
                        </table>
                        
                    </div>
                </div>  
        </div>
    )
}

export default Utilisateur
