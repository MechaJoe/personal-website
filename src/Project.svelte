<script>
  export let title = "Project Title"
  export let technologies = "Technologies"
  export let description = "Description"
  import HumanCapacityIncrease from "svelte-material-icons/HumanCapacityIncrease.svelte"
  import MusicBox from "svelte-material-icons/MusicBox.svelte"
</script>

<div class="py-20">
  <div class="flex gap-5 items-center pb-5">
    <h1>{title}</h1>
    {#if title === "concourse"}
      <HumanCapacityIncrease size={80} />
    {:else if title === "MusicBar"}
      <MusicBox size={100} />
    {/if}
  </div>
  <div>
    <p>{technologies}</p>
  </div>
  <br />
  <div class="flex flex-col h-auto items-center gap-5 text-2xl">
    <p>{description}</p>
  </div>
</div>
