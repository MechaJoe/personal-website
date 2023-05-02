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

<div class="w-screen min-h-[150vh] flex py-20 px-40 justify-start">
  <div>
    <h1 class="h-fit pb-20">Who am I?</h1>
    <div class="top-80 grid grid-cols-2 gap-y-40">
      {#if showA}
        <h2 in:fade out:fade class="text-3xl">...an American</h2>
        <p>
          I was born in Pennsylvania and raised in Connecticut. Some of my favorite memories are of
          spending long summer days with my friends at Tod's Point. Now I'm based in Boston&mdash;I
          suppose growing up in New England affected me more than I thought it would.
        </p>
      {/if}
      {#if showB}
        <h2 in:fade out:fade class="text-3xl">...a software engineer</h2>
        <p>
          My alma mater is the University of Pennsylvania, from which I graduated in 2023.
          I've worked in a variety of settings: academic research labs, a YC-funded startup, and a
          large tech company. But it wasn't always clear to me that I wanted to be a software
          engineer&mdash;I was accepted to Penn as a Bioengineering major on the pre-medical track.
          Early in college, I wandered between major options, restless to choose one that called to
          me. Eventually, my desire to build and be constantly learning new things led me to major
          in Computer Science, with minors in English and Mathematics to satisfy my other
          intellectual cravings.
        </p>
      {/if}
      {#if showC}
      <h2 in:fade out:fade class="text-3xl">...a human</h2>
      <p>
        Growing up, I was classically trained to play the violin. I competed in and won local
        competitions, and was part of the New York Youth Symphony in high school. I don't play as
        much as I used to, but I still love listening to classical music. Outside of music, I also
        like to play games like Tetris and Hearthstone. In 2023, I became a licensed bartender, and
        can make any classic cocktail (barring the occasional memory slip).
      </p>
      
      {/if}
    </div>
  </div>
  <div>

  </div>
</div>