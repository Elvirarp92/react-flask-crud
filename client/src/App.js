import axios from 'axios'
import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './components/pages/'

function App() {
  const cancelTokenSource = axios.CancelToken.source()

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/users', { cancelToken: cancelTokenSource.token })
      .then((response) => setUsers(response.data.users))
      .catch((err) => console.log(err))
  }, [])

  return <HomePage users={users}></HomePage>
}

export default App
