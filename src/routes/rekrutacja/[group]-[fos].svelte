<script context="module">
    export async function load({ params, fetch }) {
        const res = await fetch(`/rekrutacja/${params.group}-${params.fos}.json`);
        const { data, error } = await res.json();

        if(res.ok) {
            return {
                props: {
                    data
                }
            };
        } else {
            return {
                status: res.status,
                error
            }
        }
    }
    
</script>

<script>
    import RHeader from "$lib/components/recruitment/RHeader.svelte";
    import RParagraph from "$lib/components/recruitment/RParagraph.svelte";
    import RList from "$lib/components/recruitment/RList.svelte";

    export let data;

    const title = `${data.group.title ?? data.group.name} ${data.name}`;
</script>

<div class="fos">
    <section class="expanded-section">
        <div>
            <div class="header">
                <h1>{title}</h1>
                <a sveltekit:prefetch class="back" href="/rekrutacja"><span class="material-icons">arrow_back</span>Powrót</a>
            </div>
            
            {#each data.description.blocks as block}
                {#if block.type === "header"}
                    <RHeader level={block.data.level}>{block.data.text}</RHeader>
                {:else if  block.type === "paragraph"}
                    <RParagraph>{block.data.text}</RParagraph>
                {:else if  block.type === "list"}
                    <RList style={block.data.style} items={block.data.items}/>
                {:else}
                    <div>
                        this element type doesn't exist (yet)
                    </div>
                {/if}
            {/each}
        </div>
    </section>
</div>

<style>
    .header {
        margin: 5em 0;
        min-width: 100%;
    }

    h1 {
        width: 100%;
        font-size: clamp(1em, 10vw, 3.5em);
        text-transform: capitalize;
    }

    span.material-icons {
        vertical-align: bottom;
    }

    .back {
        color: var(--text-secondary);
        transition: color .25s ease;
    }

    .back:hover {
        color: var(--accent-secondary);
    }
</style>