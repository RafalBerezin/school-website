<script>
    import { theme } from "$lib/stores/theme";

    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import ThemeSwitch from "$lib/components/buttons/ThemeSwitch.svelte";

    function changeTheme() {
        theme.update(value => value != 'dark' ? 'dark' : 'light')
    }
</script>
<div class="container" class:dark-mode={$theme === 'dark'}>
    <Navbar />
    <ThemeSwitch />

    <main>
        <slot></slot>
    </main>

    <Footer />
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: var(--main);
    }
</style>