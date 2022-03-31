<!--
@component
A card :)

- Usage:
    ```tsx
    <Card data={}/>
    ```

Props:
- data

Data should contain:
- name
- title
- img (url)
-->

<script>
    export let data;

    const { name, title, img } = data;
</script>

<div class="card">
    <a href={`/rekrutacja/${title}-${name}`}>
        <div class="card--image">
            <img src={img} alt={`${title}-${name}`}>
        </div>
        <div class="card--title">
            <h3>
                {title}
            </h3>
            <h2 class="text-accent">
                {name}
            </h2>
        </div>
    </a>
</div>

<style>
    .card {
        margin: 1em;
        width: clamp(10em, 85vw, 20em);
        border-radius: 5px;
        background-color: var(--main-secondary);
        color: var(--text-on-accent);

        aspect-ratio: 2/3;
        overflow: hidden;
        transition: transform .2s ease-out;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    }

    .card:hover,
    .card:focus-within {
        transform: translateY(-1em);
    }

    a {
        display: block;
        height: 100%;
    }

    .card--image {
        height: 66%;
        display: flex;
        justify-content: center;
    }

    .card--image img {
        height: 100%;
        /* aspect-ratio: 1; */
    }

    .card--title {
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 33%;
        text-align: center;
        text-transform: capitalize;
    }

    h2 {
        font-size: 1.5em;
    }
    
</style>