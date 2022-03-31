<!--
@component
Icon that switches between 2 values with animation

- Usage:
    ```tsx
    <SwitchingIcon condition={} ifTrue="" ifFalse="" />
    ```

Props:
- condition
- ifTrue
- ifFalse

To change size modify '--icon-size' property on parent node
-->

<script>
    import { scale } from 'svelte/transition';
    import { elasticOut } from 'svelte/easing';

    export let condition;
    export let ifTrue;
    export let ifFalse;    
</script>

{#if condition}
    <span class="material-icons" in:scale={{easing: elasticOut, duration: 1000}}>{ifTrue}</span>    
{:else}
    <span class="material-icons" in:scale={{easing: elasticOut, duration: 1000}}>{ifFalse}</span>
{/if}

<style>
    span {
        font-size: var(--icon-size);
    }
</style>