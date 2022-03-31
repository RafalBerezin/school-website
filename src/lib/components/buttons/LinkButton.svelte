<!--
@component
Link stylized for a button

- Usage:
    ```tsx
        <LinkButton href={} ...> content </LinkButton>
    ```

Props:
- href
- target
-->

<script>
    export let href = ''
    export let target = ''
</script>

<a {href} {target}>
    <slot>
        No content provided!
    </slot>
</a>

<style>
    a,
    a:visited {
        display: block;
        padding: 1em;
        
        width: fit-content;
        
        background: var(--accent);
        color: var(--text-on-accent);
        text-decoration: none;
        font-weight: bold;
        
        border-radius: 5px;
        cursor: pointer;
        transition: filter .1s ease-in-out;
    }

    a:hover {
        filter: brightness(1.1);
    }
</style>