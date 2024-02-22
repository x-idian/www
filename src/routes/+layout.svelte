<script>
    import "tailwindcss/tailwind.css";
</script>

<div class="navbar bg-base-100 fixed z-10 top-0">
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

<slot />