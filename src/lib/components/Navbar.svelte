<script>
    import { page } from '$app/stores';

	import { scale, slide } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';

    import { mobileWidthhTreshhold } from '$lib/stores/config';
    import LinkButton from '$lib/components/buttons/LinkButton.svelte';

    $: currentPath = $page.url.pathname;
    
    const navItems = [
        {
            href: '/rekrutacja',
            label: 'Rekrutacja'
        },
        {
            href: '/o-szkole',
            label: 'O Szkole'
        },
        {
            href: '/dla-ucznia',
            label: 'Dla Ucznia'
        },
        {
            href: '/aktualnosci',
            label: 'Aktualności'
        },
        {
            href: '/kontakt',
            label: 'Kontakt'
        },
    ];
    
    let scrollY;

    let isOpen = false;
    let screenWidth;
    $: isMobile = screenWidth <= mobileWidthhTreshhold;
    
    const handleMobileIconClick = () => {isOpen = !isOpen}
</script>

<svelte:window bind:scrollY={scrollY} bind:innerWidth={screenWidth}/>

<nav class:shadow={(scrollY !== 0 && !isMobile) || isOpen}>
    {#if isMobile}
        <div class="mobile-bar" class:shadow={scrollY !== 0 || isOpen}>
            <a sveltekit:prefetch href="/"><img src="logo.svg" alt="logo"></a>
            <div class="mobile-icon" on:click={handleMobileIconClick}>
                {#if isOpen}
                    <span class="material-icons" in:scale={{easing: elasticOut, duration: 1000}}>close</span>
                {:else}
                    <span class="material-icons" in:scale={{easing: elasticOut, duration: 1000}}>menu</span>
                {/if}
            </div>
        </div>
    {/if}

    {#if !isMobile || isOpen}
        <ul class:mobile={isMobile} transition:slide={{ duration: isMobile ? 250 : 0 }}>
            {#if !isMobile}
                <li class="logo">
                    <a sveltekit:prefetch href="/"><img src="logo.svg" alt="logo"></a>
                </li>
            {/if}

            {#each navItems as item}
                <li>
                    <a sveltekit:prefetch href={item.href} class:active={currentPath.startsWith(item.href)}>{item.label}</a>
                </li>
            {/each}
                
            <li class="separate">
                <LinkButton href={"https://uonetplus.vulcan.net.pl/powiatlukowski/"} target={"_blank"}>
                    E-dziennik
                </LinkButton>
            </li>
        </ul>
    {/if}
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: var(--main);

        transition: box-shadow ease .25s;
        z-index: 1;
    }
    /* Mobile bar */
    .mobile-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;

        transition: box-shadow ease .25s;
    }

    .mobile-icon{
        padding: .5em;
    }

    .mobile-icon span {
        font-size: 2em;
    }

    /* Navigation */
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
        width: 100%;
        list-style: none;
    }
  
    ul:not(.mobile) .logo {
        margin-right: auto;
    }

    .logo img {
        height: 3em;
        aspect-ratio: 1;
    }
    
    li a {
        display: block;
        position: relative;
        padding: 1em;
        text-transform: uppercase;
    }

    li:not(.logo) a::after {
        content: '';

        position: absolute;
        left: 0;
        bottom: 0;

        width: 100%;
        height: 4px;

        background-color: var(--accent);

        border-radius: 2px;

        transform: scaleX(0);
        transform-origin: center;
        transition: transform .15s ease-out;
    }

    li:not(.logo) a:hover::after {
        transform: scaleX(1) !important;
    }

    li:not(.logo) a.active::after {
        transform: scaleX(0.5);
    }

    ul.mobile .separate {
        margin-top: 10px;
    }

    ul:not(.mobile) .separate {
        margin-left: auto;
    }

    ul.mobile {
        flex-direction: column;
        text-align: center;
        padding-bottom: 3em;
    }

    .shadow {
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    }
</style>