<script>
    import vision_img from '$lib/assets/about/vision.jpeg';
    import {our_values} from "$lib/data/about";
</script>

<section class="flex font-poppins pt-28 px-2.5">
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
            <h1 class="mt-2 text-2xl font-bold md:text-4xl">
                Who we are
            </h1>
        </div>
        <div class="flex flex-wrap justify-center">
            <div class="px-4 mb-10 lg:w-1/2 lg:mb-0">
                <div class="relative max-w-sm lg:max-w-md">
                    <img class="relative object-cover w-full rounded" alt="Our vision" src={vision_img} />
                </div>
            </div>
            <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                <div class="flex mb-4">
                        <span
                                class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="w-5 h-5 bi bi-file-text" viewBox="0 0 16 16">
                                <path
                                        d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                <path
                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                        </span>
                    <div>
                        <h2 class="mb-4 text-xl font-bold leading-tight md:text-2xl">
                            Our vision
                        </h2>
                        <p class="text-base leading-loose">
                            To transform the world by eliminating mundane work, liberating people to pursue richer and more fulfilling endeavors.
                        </p>
                    </div>
                </div>
                <div class="flex mb-4">
                        <span
                                class="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 class="w-5 h-5 bi bi-file-text" viewBox="0 0 16 16">
                                <path
                                        d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                <path
                                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                        </span>
                    <div>
                        <h2 class="mb-4 text-xl font-bold leading-tight md:text-2xl">
                            Our mission
                        </h2>
                        <p class="text-base leading-loose">
                            X-idian is dedicated to transforming the insurance landscape, eradicating routine burdens to allow for a focus on more strategic, satisfying, and customer-focused initiatives.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="flex font-poppins pt-16 px-2.5">
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div class="pl-4 mb-6 border-l-4 border-blue-500">
            <h1 class="mt-2 text-2xl font-bold md:text-4xl">
                Our Values
            </h1>
        </div>
        <div class="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-4">
            {#each our_values as value}
            <div class="card grid bg-base-300 text-base-content shadow-xl hover:bg-primary hover:text-primary-content">
                <div class="card-body">
                    <h2 class="card-title">{ value.title }</h2>
                    <p>{ value.body }</p>
                </div>
            </div>
            {/each}

<!-- TODO Make loop-->

        </div>
    </div>
</section>
