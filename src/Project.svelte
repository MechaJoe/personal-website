<script>
  export let title = "Project Title"
  export let technologies = "Technologies"
  export let description = "Description"
  import HumanCapacityIncrease from "svelte-material-icons/HumanCapacityIncrease.svelte"
  import MusicBox from "svelte-material-icons/MusicBox.svelte"
  import NotebookOutline from "svelte-material-icons/NotebookOutline.svelte"
</script>

<div class="py-20">
  <div>
    {#if title === "concourse"}
      <a class="flex gap-5 items-center pb-5" href="https://github.com/MechaJoe/senior-design">
        <h1 class="font-[Montserrat]">{title}</h1>
        <HumanCapacityIncrease size={80} />
      </a>
    {:else if title === "MusicBar"}
      <a class="flex gap-5 items-center pb-5" href="https://github.com/MechaJoe/CIS550FinalProject">
        <h1 class="font-[Roboto]">{title}</h1>
        <MusicBox size={80} />
      </a>
    {:else if title === "gournal"}
    <a class="flex gap-5 items-center pb-5" href="https://github.com/MechaJoe/gournal">
      <h1>{title}</h1>
      <NotebookOutline size={80} />
    </a>
    {/if}
  </div>
  <div>
    <p class="font-mono">{technologies}</p>
  </div>
  <br />
  <div class="flex flex-col h-auto items-center gap-5 text-2xl font-mono">
    <p>{description}</p>
  </div>
</div>
