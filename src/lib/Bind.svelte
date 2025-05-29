<script>
  let name = $state("world");
  let a = $state(1);
  let b = $state(1);
  let selected = $state();
  let scoops = $state(1);
  let flavours = $state([]);
  let value = $state("");

  let check = $state(false);

  let questions = $state([
    {
      id: 1,
      text: `Where did you go to school?`,
    },
    {
      id: 2,
      text: `What is your mother's name?`,
    },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ]);
</script>

<input bind:value={name} />

<h1>Hello {name}!</h1>
<label for="">
  <input type="input" bind:value={a} />
  <input type="range" bind:value={a} />
</label>
<label for="">
  <input type="number" bind:value={b} />
  <input type="range" bind:value={b} />
</label>

<input type="checkbox" bind:checked={check} />
<form action="/a">
  <div>
    <select bind:value={selected}>
      {#each questions as question (question.id)}
        <option value={question}> {question.text} </option>
      {/each}
    </select>
  </div>

  <button type="submit" disabled={!check}>button</button>
  <p>selected : {selected && selected.id}</p>
  <h2>size</h2>
  {#each [1, 2, 3] as number}
    <label>
      <input type="radio" name="scoops" value={number} bind:group={scoops} />

      {number}
      {number === 1 ? "scoop" : "scoops"}
    </label>
  {/each}

  <h2>flavours</h2>
  {#each ["cookies and cream", "mint choc chip", "raspberry ripple"] as flavour}
    <label>
      <input
        type="checkbox"
        name="flavours"
        value={flavour}
        bind:group={flavours}
      />

      {flavour}
    </label>
  {/each}

  <textarea {value}></textarea>
</form>
