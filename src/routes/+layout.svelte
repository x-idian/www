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
            <li>
                <details>
                    <summary>
                        Parent
                    </summary>
                    <ul class="p-2 bg-base-100 rounded-t-none">
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                    </ul>
                </details>
            </li>
        </ul>
    </div>
</div>

<slot />