<script>

  import { Router, Link, Route, navigate } from 'svelte-routing'
  import { token } from '../stores'

  function logout(event) {
    
    event.preventDefault()

    token.unset()
  }

</script>

<Router>

  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><a href="#" on:click={logout}>Logout</a></li>
  </ul>

  <div>
    <Route path="/about">About</Route>
    <Route path="/">Root</Route>
  </div>

</Router>