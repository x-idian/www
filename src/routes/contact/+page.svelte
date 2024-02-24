<script>
    import vision_img from '$lib/assets/about/vision.jpeg';
    import {our_values} from "$lib/data/about";
</script>

<section class="flex font-poppins pt-28 px-2.5">
    <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <h1 class="mt-2 text-2xl font-bold md:text-4xl">
            Contact us
        </h1>
    </div>
</section>

<section class="flex font-poppins px-2.5">
    <div class="justify-center flex-1 py-4 mx-auto lg:py-6 md:px-6 gap-4">
        <div class="flex justify-center">
            <div class="chat chat-start">
                <div class="chat-header">
                    x-idian
                    <time class="text-xs opacity-50">Online</time>
                </div>
                <div class="chat-bubble">Drop us a line about your project at <a class="font-bold" href="mailto:info@x-idian.com">info@x-idian.com</a> or via the contact form below, and we will contact you within a business day.</div>
            </div>
        </div>
        <div class="flex justify-center px-5 py-5">
            <div class="xl:max-w-7xl bg-base-100 border drop-shadow-xl w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
                <div class="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden lg:flex p-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.3271390044956!2d28.018821677221165!3d-26.022850156615988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e992511eb75%3A0x959f187084ae3e2b!2sThe%20Workplace%20%40%20Regent%20Hill%20Office%20Park!5e0!3m2!1sen!2sza!4v1695324156216!5m2!1sen!2sza" width="100%" height="100%"  style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
                    <h1 class="text-center text-2xl sm:text-3xl font-semibold text-base-content">
                        Get in touch
                    </h1>
                    <div class="w-full mt-5 sm:mt-8">
                        <div class="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                            <div class="flex flex-col sm:flex-row gap-3">
                                <input
                                        type="text"
                                        placeholder="Name"
                                        class="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                                />
                            </div>
                            <input
                                    type="text"
                                    placeholder="Email"
                                    class="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                            />
                            <input
                                    type="text"
                                    placeholder="Phone No."
                                    class="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                            />
                            <input
                                    type="text"
                                    placeholder="Company"
                                    class="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                            />
                            <textarea class="form-control textarea textarea-primary w-full text-black placeholder:text-black/70"
                                      id="moreInput"
                                      name="description"
                                      rows="6"
                                      placeholder="How can we help you?"
                            ></textarea>
                            <div class="flex items-center gap-1.5  justify-start pl-2">
                                <div class="form-control">
                                    <label class="label cursor-pointer">
                                        <input
                                                type="checkbox"
                                                class="checkbox-xs checkbox-primary"
                                        />
                                    </label>
                                </div>
                                <h3 class="flex items-center whitespace-nowrap text-xs text-black">
                                    I agree to the
                                    <span class="text-[#4A07DA]">&nbsp;Terms</span>
                                    &nbsp;and
                                    <span class="text-[#4A07DA]">&nbsp;Privacy Policy</span>.
                                </h3>
                            </div>
                            <div class="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                                <button class="btn btn-active btn-primary btn-block max-w-[200px]">
                                    Let's Go!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
