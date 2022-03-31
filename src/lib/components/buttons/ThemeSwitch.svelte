<script>
    import SwitchingIcon from "../SwitchingIcon.svelte";

    import { theme } from "$lib/stores/theme";

function changeTheme() {
    theme.update(value => value != 'dark' ? 'dark' : 'light')
}
</script>

<button class="theme-switch" class:dark={$theme === 'dark'} on:click={changeTheme}>
    <SwitchingIcon condition={$theme === 'dark'} ifTrue="light_mode" ifFalse="dark_mode"/>
</button>

<style>
    .theme-switch {
        display: flex;
        justify-content: center;
        align-items: center;
        
        background-color: var(--dark-main);
        color: var(--dark-text);

        padding: 0.5em;
        border: none;
        border-radius: 5px;

        cursor: pointer;
        /* box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2); */
        aspect-ratio: 1;

        --icon-size: 2.5em;
    }

    .theme-switch.dark {
        background-color: var(--light-main);
        color: var(--light-text);
    }
</style>