<script>
  import { fade } from 'svelte/transition'
  import { onMount } from 'svelte'
  let show = false
  onMount(() => {
    window.addEventListener("scroll", function() {
      const vpHeight = document.documentElement.clientHeight
      show = window.pageYOffset >= vpHeight
    })
  })


</script>

<div class="w-screen h-[200vh] bg-black text-white
            flex justify-center">
  <div>
    <h1 class="sticky h-fit top-20 pt-20">Who am I?</h1>
    {#if show}
    <h2 in:fade out:fade class="sticky top-20 text-3xl">a software engineer</h2>
    {/if}
  </div>
</div>