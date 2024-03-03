<script>
    import hero_img from '$lib/assets/hero-large.jpg';
    import vision_img from "$lib/assets/about/vision.jpeg";
    import {how_we_can_help} from "$lib/data/home";
</script>

<div class="hero min-h-screen" style="background-image: url({hero_img});">
    <div class="w-10/12 text-center text-neutral-content">
            <div class="flex flex-row lg:justify-start">
                <div class="basis-full lg:basis-1/3">
                    <div class="max-w-full lg:max-w-md">
                        <h1 class="mb-5 text-7xl font-bold">X-IDIAN</h1>
                        <p class="mb-5 text-2xl">Using the Art of Intelligence to help liberate people</p>
                        <button class="btn btn-primary">Find out more</button>
                    </div>
                </div>
            </div>
    </div>

</div>
<div class="pt-[5%] bg-base-200">
    <div class="flex flex-col lg:flex-row w-full">
        <div class="mx-auto">
            <h1 class="text-5xl font-bold pb-10 text-center">How can we help?</h1>
            {#each how_we_can_help as value, i }
            {#if i%2 === 0}
                <div class="flex flex-col lg:flex-row py-10">
                    <div class="flex mb-10 lg:w-6/12 lg:mb-0 justify-around">
                        <img class="max-w-md w-full rounded-lg shadow-2xl" alt="Our vision" src={value.image} />
                    </div>
                    <div class="flex px-6 mb-10 lg:w-6/12 lg:mb-0 justify-around items-center">
                        <div class="max-w-lg">
                            <h2 class="text-xl font-bold leading-tight md:text-2xl pb-5">
                                {value.title}
                            </h2>
                            <p class="text-base leading-loose">
                                {value.body}
                            </p>
                        </div>
                    </div>
                </div>
            {:else }
                <div class="flex flex-col lg:flex-row py-10">
                    <div class="flex px-6 mb-10 lg:w-6/12 lg:mb-0 justify-around items-center">
                        <div class="max-w-lg">
                            <h2 class="text-xl font-bold leading-tight md:text-2xl pb-5">
                                {value.title}
                            </h2>
                            <p class="text-base leading-loose">
                                {value.body}
                            </p>
                        </div>
                    </div>
                    <div class="flex mb-10 lg:w-6/12 lg:mb-0 justify-around">
                        <img class="max-w-md w-full rounded-lg shadow-2xl" alt="Our vision" src={value.image} />
                    </div>
                </div>
            {/if}
            {/each}

        </div>
    </div>
</div>