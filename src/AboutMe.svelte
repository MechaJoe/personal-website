<script>
  import { fade } from 'svelte/transition'
  import { onMount } from 'svelte'
  let showA = false
  let showB = false
  let showC = false
  onMount(() => {
    window.addEventListener("scroll", function() {
      const vpHeight = document.documentElement.clientHeight
      showA = window.pageYOffset >= vpHeight * 0.75
      showB = window.pageYOffset >= vpHeight * 0.9
      showC = window.pageYOffset >= vpHeight * 1.25
    })
  })


</script>

<div class="w-screen min-h-[150vh] flex py-20 px-10 justify-start">
  <div>
    <h1 class="h-fit pb-20">Who is Joe, really?</h1>
    <div class="top-80 grid grid-cols-2 gap-y-40">
      {#if showA}
        <h2 in:fade out:fade class="text-3xl">...an East Coaster</h2>
        <p>
          Joe was born in Pennsylvania and raised in Connecticut. Some of his favorite memories are of
          spending long, breezy summer days with his friends at Tod's Point.
        </p>
      {/if}
      {#if showB}
        <h2 in:fade out:fade class="text-3xl">...an Ivy League-educated engineer</h2>
        <p>
          Joe graduated from the University of Pennsylvania in 2023.
          It wasn't always clear that he would become a software
          engineer&mdash;he was accepted to Penn as a Bioengineering major on the pre-medical track.
          Early in college, he wandered between major options, restless for one that called to
          him. Eventually, his desire to build and for constant learning led him to choose
          Computer Science, with minors in English and Mathematics to satisfy other
          intellectual cravings.
        </p>
      {/if}
      {#if showC}
      <h2 in:fade out:fade class="text-3xl">...a musician who likes to drink</h2>
      <p>
        Growing up, Joe was classically trained to play the violin. He competed in and won local
        competitions, and was part of the New York Youth Symphony in high school. He doesn't play as
        much as he used to, but he still loves listening to classical music. Outside of music, he also
        plays video games like Tetris and Hearthstone. In 2023, he became a licensed bartender, and
        can make any classic cocktail (barring the occasional memory slip).
      </p>
      
      {/if}
    </div>
  </div>
  <div>

  </div>
</div>