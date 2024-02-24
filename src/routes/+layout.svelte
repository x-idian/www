<script>
    import "tailwindcss/tailwind.css";
    import {onMount} from "svelte";

    let currentYear = new Date().getFullYear();

</script>

<div class="navbar bg-transparent absolute z-10 top-0 text-white">
    <div class="flex-1">
        <a class="btn btn-ghost text-xl" href="/">X-IDIAN</a>
    </div>
    <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/careers">Careers</a></li>
        </ul>
    </div>
</div>

<slot class="top-0" />

<footer class="footer footer-center p-10 bg-base-300">
    <nav class="grid grid-flow-col gap-4">
        <a class="link link-hover" href="/about">About us</a>
        <a class="link link-hover" href="/contact">Contact Us</a>
        <a class="link link-hover" href="/careers">Careers</a>
    </nav>
    <nav>
        <div class="grid grid-flow-col gap-4">
            <a target=”_blank” href="https://www.linkedin.com/company/xidian/">
                <span class="text-5xl">
				    <span class="icon-[mdi--linkedin]"></span>
			    </span>
            </a>
            <a target=”_blank” href="https://www.github.com/x-idian">
                <span class="text-5xl">
				    <span class="icon-[mdi--github]"></span>
			    </span>
            </a>
        </div>
    </nav>
    <aside>
        <p>Copyright © {currentYear} - All right reserved by X-IDIAN</p>
    </aside>
</footer>
