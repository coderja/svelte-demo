<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import CustomHtml from "./lib/Html.svelte";
  import State from "./lib/State.svelte";
  import Props from "./lib/Props.svelte";
  import Logic from "./lib/Logic.svelte";
  import Bind from "./lib/Bind.svelte";
  import ClassStyle from "./lib/ClassStyle.svelte";
  const obj = {
    title: "Vite + Svelte",
    version: "1.0.0",
  };
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>

  <div class="card">
    <CustomHtml />
    <State />
    <Props title={obj.title} version={obj.version} />
    <Logic />
    <Bind />
    <ClassStyle --color="yellow" />
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
