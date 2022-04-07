<script context="module">
    const modules = import.meta.glob("./**.svelte");
    let allMenu= [];

    for (let path in modules) {
        let cleanPath = path.replace(".svelte" , "").replace("./" , "/test/");
        allMenu.push({
            title: cleanPath.substring(cleanPath.lastIndexOf("/") + 1),
            link: cleanPath.includes("index")
                ?  cleanPath.replace("index","")
                : cleanPath
        });
    }
    export const load = async () => {
        const itemMenu = await Promise.all(allMenu)
            return {
                props: {
                itemMenu,
                }
            }
        };
        console.log(allMenu)
</script>
<script>
    export let itemMenu
    import LinkButton from "$lib/components/buttons/LinkButton.svelte";



</script>
<div>
    <section class="expanded-section">
        <h2>
            Elementy folderu test
        </h2>
        <ul>
            {#each itemMenu as item}
                <li>
                    <LinkButton href="{item.link}">
                        {item.title}
                    </LinkButton>
                </li>
            {/each}
        </ul>
    </section>
</div>
<style>
    /* flex */
    .expanded-section {
        flex-direction: column;
        gap: 2em;
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        display: inline-block;
        margin: 0 .5em;
    }
</style>



