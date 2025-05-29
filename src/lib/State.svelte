<script>
  import { counter } from "../state/share.svelte";
  let count = $state(0);
  let numbers = $state([1, 2, 3, 4]);
  // 类似vue的computed
  // 这里的$derived是一个计算属性，类似于Vue的computed
  let total = $derived(numbers.reduce((a, b) => a + b, 0));

  const increment = () => {
    counter.count += 1;
    count += 1;
  };
  const addNumber = () => {
    numbers.push(numbers.length + 1);
  };
  // 类似 react的useEffect
  $effect(() => {
    console.log(`Count is now: ${count}`);
    const id = setInterval(() => {
      console.log(`Total is now: ${total}`);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  });
</script>

<button onclick={increment}>state is {count}</button>
<p>{numbers.join(" + ")} = {total}</p>
<button onclick={addNumber}>Add a number</button>
<p>counter is {counter.count}</p>
