<script>

  import App from './components/App.svelte'
  import Login from './components/Login.svelte'

  import { token } from './stores'

</script>

{#if $token}
  <App />
{:else}
  <Login />
{/if}