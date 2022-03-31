<script>
    import { theme } from "$lib/stores/theme";

    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";

    function changeTheme() {
        theme.update(value => value != 'dark' ? 'dark' : 'light')
    }
</script>
<svelte:head>
    <title>Zespół Szkół Nr 1 w Łukowie</title>
</svelte:head>
<div class="container" class:dark-mode={$theme === 'dark'}>
    <Navbar />
    

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