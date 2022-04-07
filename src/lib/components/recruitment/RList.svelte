<!--
@component
List used in recruitment articles

- Usage:
    ```tsx
    <RList style={} items={}/>
    ```

Props:
- style
- items

if first item matches "*KWAIFIKACJE*"
special syling will be applied
-->

<script>
    export let style;
    export let items;

    const qualifications = items[0] === "*KWALIFIKACJE*";
    if(qualifications) items.shift();
</script>

{#if style === 'ordered'}
    <ol class:qualifications>
        {#each items as item}
            <li>{item}</li>
        {/each}
    </ol>
{:else}
    <ul class:qualifications>
        {#each items as item}
            <li>{item}</li>
        {/each}
    </ul>
{/if}

<style>

    ul,
    ol {
        margin: 0 0 1em 2em;
        padding: 1em;
    }

    li {
        padding: 1em;
    }

    .qualifications li {
        border-bottom: 1px solid var(--text-secondary);
    }
    
    
    .qualifications li:first-of-type {
        border-top: 1px solid var(--text-secondary);
    }
</style>