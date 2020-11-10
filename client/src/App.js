import axios from 'axios'
import { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './components/pages/'

function App() {
  const cancelTokenSource = axios.CancelToken.source()

  const [users, setUsers] = useState([])
  const [err, setError] = useState(undefined)

  function refreshUsers() {
    axios
      .get('http://127.0.0.1:5000/users', { cancelToken: cancelTokenSource.token })
      .then((response) => setUsers(response.data.users))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log('call cancelled')
        } else {
          setError(err)
        }
      })
  }

  useEffect(() => refreshUsers(), [])

  return <HomePage users={users} refreshUsers={refreshUsers}></HomePage>
}

export default App
