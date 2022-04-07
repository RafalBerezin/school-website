<!--
@component
Paragraph used in recruitment articles

- Usage:
    ```tsx
    <RParagraph> content <RParagraph/>
    ```
-->

<p><slot></slot></p>

<style>
    p {
        max-width: 60ch;
        line-height: 1.5;
        padding: 1em;
    }
</style>