<script context="module">
    // export async function load({ fetch }) {

    // }
</script>

<script>
    import { mobileWidthhTreshhold } from '$lib/stores/config';
    import LinkButton from "$lib/components/buttons/LinkButton.svelte";

    let screenWidth;

    $: isMobile = screenWidth <= mobileWidthhTreshhold;
</script>

<svelte:window bind:innerWidth={screenWidth}/>

<svelte:head>
    <title>Zespół Szkół Nr 1 w Łukowie</title>
</svelte:head>

<div class="index" class:mobile={isMobile}>
    <section class="wide-section banner">
        <section class="expanded-section">
            <div class="flex">
                <div class="banner--column banner--content">
                    <h1 class="banner--title">
                        Zespół Szkół<br>
                        <span class="text-accent">Nr 1</span> w&nbsp;Łukowie
                    </h1>

                    <h2 class="banner--subtitle">
                        im. <span class="text-accent">Henryka Sienkiewicza</span>
                    </h2>

                    <p class="banner--description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat incidunt dolor sint suscipit harum vel officiis, placeat beatae quia quo dolores. Odit consequatur tenetur iste dolor at officia, earum quam.
                    </p>

                    <div class="banner--button">
                        <LinkButton href="/o-szkole">Więcej</LinkButton>
                    </div>
                </div>

                {#if !isMobile}
                    <div class="banner--column banner--img">
                        <img src="https://source.unsplash.com/random/1000x1000" alt="banner_image">
                    </div>
                {/if}
            </div>
        </section>
    </section>
</div>

<style>
    /* .banner {
        position: relative;
        background-image: url("/banner_lines.svg");
        background-position: bottom right;
        background-repeat: no-repeat;
    } */

    .banner .flex {
        display: flex;
        width: 100%;
        gap: 2em;
    }

    .mobile .banner .flex {
        width: fit-content;
    }
    
    .banner--column {
        width: 50%;
    }

    .mobile .banner--column {
        width: fit-content;
    }

    .banner--content {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    .banner--img img {
        width: 100%;
        height: auto;
    }

    .banner--title {
        font-size: 4em;
    }

    .banner--subtitle {
        font-size: 2em;
    }

    .banner--description {
        max-width: 60ch;
        margin: 2em 0;
    }

    @media screen and (max-width: 500px) {
        .banner {
            font-size: 0.8em;
        }
    }
</style>