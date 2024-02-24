<script>
import about_img from "$lib/assets/about/about.jpg";
</script>

<svelte:head>
    <script src="https://jobs.ashbyhq.com/x-idian/embed"></script>
</svelte:head>

<section class="flex font-poppins h-[350px] px-2.5 bg-no-repeat bg-cover" style="background-image: url({about_img});">
    <div class="flex items-center mx-auto">
        <h1 class="text-2xl font-bold md:text-4xl text-white">
            Careers
        </h1>
    </div>
</section>

<section>
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6 min-h-screen">
        <div id="ashby_embed"/>
    </div>
</section>
