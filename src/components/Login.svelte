<script>

  import { login } from '../api'
  import { token } from '../stores'

  let email = ''
  let password = ''

  let error = ''

  async function submitForm(event) {

    event.preventDefault()

    const res = await login(email, password)

    if (res.error) {
      error = 'wrong cred'
      return;
    }

    token.set(res.token)
  }

</script>

<p>Credentials: foo/bar</p>

<form on:submit={submitForm}>
  <input name="email" type="text" placeholder="Email" bind:value={email}>
  <input name="password" type="password" placeholder="Password" bind:value={password}>
  <input type="submit" value="Login">
</form>

<p>{error}</p>