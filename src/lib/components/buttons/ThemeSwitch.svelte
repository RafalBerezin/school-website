<script>
    import { scale } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';

    import { theme } from "$lib/stores/theme";

function changeTheme() {
    theme.update(value => value != 'dark' ? 'dark' : 'light')
}
</script>

<button class="theme-switch" class:dark={$theme === 'dark'} on:click={changeTheme}>
    {#if $theme === 'dark'}
        <span class="material-icons" in:scale={{easing: elasticOut, duration: 1000}}>light_mode</span>    
    {:else}
        <span class="material-icons" in:scale={{easing: elasticOut, duration: 1000}}>dark_mode</span>
    {/if}
</button>

<style>
    .theme-switch {
        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 15%;
        left: 0;
        
        background-color: var(--dark-main);
        color: var(--dark-text);

        padding: 0.5em;
        border: none;
        border-radius: 0 5px 5px 0;

        cursor: pointer;
        box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);
    }

    .theme-switch.dark {
        background-color: var(--light-main);
        color: var(--light-text);
    }

    .theme-switch span {
        font-size: 2.5em;
    }
</style>