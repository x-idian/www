<script>
    import vision_img from '$lib/assets/about/vision.jpeg';
    import diff_img from '$lib/assets/about/differentiators.jpg';
    import {our_values, our_differentiators} from "$lib/data/about";
</script>

<section class="flex font-poppins pt-28 px-2.5">
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="pl-4 mb-6 border-l-4 border-primary">
            <h1 class="mt-2 text-2xl font-bold md:text-4xl">
                Who we are
            </h1>
        </div>
        <div class="flex flex-wrap justify-center">
            <div class="mb-10 lg:w-5/12 lg:mb-0">
                    <img class="max-w-md w-full rounded-lg shadow-2xl" alt="Our vision" src={vision_img} />
            </div>
            <div class="w-full px-6 mb-10 lg:w-7/12 lg:mb-0 ">
                <h2 class="text-xl font-bold leading-tight md:text-2xl">
                    Our vision
                </h2>
                <p class="text-base leading-loose">
                    To transform the world by eliminating mundane work, liberating people to pursue richer and more fulfilling endeavors.
                </p>
                <div class="divider divider-accent"></div>
                <h2 class="text-xl font-bold leading-tight md:text-2xl">
                    Our mission
                </h2>
                <p class="text-base leading-loose">
                    X-idian is dedicated to transforming the insurance landscape, eradicating routine burdens to allow for a focus on more strategic, satisfying, and customer-focused initiatives.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="flex font-poppins pt-16 px-2.5">
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="pl-4 mb-6 border-l-4 border-primary">
            <h1 class="mt-2 text-2xl font-bold md:text-4xl">
                Our Values
            </h1>
        </div>
        <div class="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
            {#each our_values as value}
            <div class="card grid bg-base-200 text-base-content shadow-xl ease-in duration-100 hover:bg-primary hover:text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">{ value.title }</h2>
                    <p>{ value.body }</p>
                </div>
            </div>
            {/each}
        </div>
    </div>
</section>

<section class="flex font-poppins pt-16 px-2.5">
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="pl-4 mb-6 border-l-4 border-primary">
            <h1 class="mt-2 text-2xl font-bold md:text-4xl">
                Our Differentiators
            </h1>
        </div>

        <div class="flex flex-wrap justify-center">
            <div class="mb-10 lg:pe-4 lg:w-5/12 lg:mb-0">
                <div class="max-w-lg">
                    <img class="object-cover w-full rounded-lg shadow-2xl" alt="Our vision" src={diff_img} />
                </div>
            </div>
            <div class="w-full mb-10 lg:w-7/12 lg:mb-0 ">
                {#each our_differentiators as value, i }
                <div class="collapse collapse-plus bg-base-200 text-base-content shadow-md mb-2 lg:mb-4" >
                    {#if i===0}
                    <input type="radio" name="differentiator-accordion" checked />
                    {:else }
                    <input type="radio" name="differentiator-accordion" />
                    {/if}
                    <div class="collapse-title text-xl font-medium">
                        {value.title}
                    </div>
                    <div class="collapse-content">
                        <p>{value.body}</p>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>
