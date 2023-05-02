<script>
  export let title = 'Project Title'
  export let technologies = 'Technologies'
  export let description = 'Description'
  import HumanCapacityIncrease from 'svelte-material-icons/HumanCapacityIncrease.svelte'
  import MusicBox from 'svelte-material-icons/MusicBox.svelte'


</script>


<div class="py-40 grid grid-cols-2 gap-y-40">
  <div>
    <h1>{title}</h1>
    <p>{technologies}</p>
  </div>
  <div class="flex flex-col h-auto items-center gap-10">
  {#if title === 'concourse'}
    <HumanCapacityIncrease size={80} />
  {:else if title === 'MusicBar'}
    <MusicBox size={100} />
  {/if}
  <p>{description}</p>
  </div>
</div>