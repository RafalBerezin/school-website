<script context="module">
    export async function load({ fetch }) {
        const res = await fetch('/rekrutacja.json');
        const { data } = await res.json();

        return {
            props: {
                data
            }
        };
    }
</script>

<script>
    import Card from "$lib/components/Card.svelte";

    export let data;
</script>

<div class="recruitment">
    <section class="expanded-section">
        <div class="wrapper">
            {#each data as group}
                <h2>{group._id[0].name}</h2>
                <div class="tiles">
                    {#each group.fields_of_study as fos}
                        <Card data={{title: group._id[0].title ?? group._id[0].name, ...fos}}/>
                    {/each}
                </div>
            {/each}
        </div>
    </section>
</div>

<style>
    .wrapper {
        margin-top: 3em;
    }

    h2 {
        max-width: 600px;
        padding: .5em;
        font-size: clamp(1em, 10vw ,3em);
        font-weight: normal;
        text-transform: capitalize;
        border-bottom: 1px solid var(--text);
    }

    .tiles {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 2em 0;
    }

</style>