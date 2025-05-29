<script>
  let count = $state(0);

  const addNumber = () => {
    count++;
  };

  const colors = $state(["red", "green", "blue"]);
  const cls = $state([
    { color: "red", id: 1 },
    { color: "green", id: 2 },
    { color: "blue", id: 3 },
  ]);

  const promise = $state(
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        if (randomNumber > 3) {
          resolve(randomNumber);
        } else {
          reject(new Error("Rolled a number less than or equal to 3"));
        }
      }, 2000);
    })
  );
</script>

<p>{count}{count > 1 ? "times" : "time"}</p>

<button onclick={addNumber}>logic button</button>
{#if count > 5}
  <p>Count is greater than 5!</p>
{:else}
  <p>Count is 5 or less.</p>
{/if}

{#if count > 5}
  <p>Count is greater than 5!</p>
{:else if count < 5}
  <p>Count is less than 5</p>
{:else}
  <p>Count is exactly 5</p>
{/if}

{#each colors as color, i}
  <span style="color:{color}">{i + 1}</span>
{/each}
{#each cls as c (c.id)}
  <span style="color:{c.color}">{c.id + 1}</span>
{/each}

{#await promise}
  <p>...rolling</p>
{:then number}
  <p>you rolled a {number}!</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
