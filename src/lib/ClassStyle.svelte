<script>
  let active = $state(false);
</script>

<p class={active ? "active" : ""}>class设置</p>
<button class={["button", { active }]} onclick={() => (active = !active)}
  >toggle</button
>

<p
  style="transition: all 2s;transform: {active ? 'translateX(-120px)' : ''}"
  style:font-weight={active ? "bold" : "normal"}
>
  样式设置
</p>

<style>
  p {
    width: 200px;
    margin: 0 auto;
    background: var(--color);
  }
  .button {
    background-color: #42b983;
    font-size: 20px;
  }
  .active {
    color: red;
  }
</style>
