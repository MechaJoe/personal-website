<script>
  import Navbar from './Navbar.svelte'
</script>

<div class="
  p-6
  min-h-screen
  h-fit
  w-fit
  flex flex-col
  justify-start
  items-start border-b
  overflow-hidden
  "
>
  <div class="">
    <Navbar />
    <br><br>
    <h1 class="font-serif font-thin">Joe Konno (今野浄) is a software engineer and licensed bartender
      based in Boston, Massachusetts. <br><br>His aim is to: build cool things with others and
      absorb as much information&mdash;useful or not&mdash;as he can.</h1>
  </div>
  <svg class="animate-bounce w-6 h-6 m-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
  </svg>
</div>