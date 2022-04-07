<!--
@component
Header used in recruitment articles

- Usage:
    ```tsx
    <RHeader level={}> content <RHeader/>
    ```

Props:
- level
-->

<script>
    export let level;
</script>

{#if level === 2}
    <h2><slot><span class="error">No content provided</span></slot></h2>
{:else if  level === 3}
    <h3><slot><span class="error">No content provided</span></slot></h3>
{:else}
    <h4><slot><span class="error">No content provided</span></slot></h4>
{/if}

<style>
    h2, h3, h4 {
        margin-top: 1em;
        padding: 1rem;
    }

    h2 {
        font-size: 2.5em;
    }

    h3 {
        font-size: 2em;
    }

    h4 {
        font-size: 1.5em;
    }

    .error {
        color: red;
    }
</style>