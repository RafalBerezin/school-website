<script>
    import { theme } from "$lib/stores/theme";
    import { mobileWidthhTreshhold } from "$lib/stores/config";
import { onMount } from "svelte";

    let screenWidth;

    $: isMobile = screenWidth <= mobileWidthhTreshhold;
</script>

<svelte:head>
    <title>Kontakt</title>
</svelte:head>

<svelte:window bind:innerWidth={screenWidth}/>

<div class="contact" class:mobile={isMobile}>
    <section class="expanded-section">
        <div class="flex">
            <div class="contact--column">
                <div class="contact--section">
                    <h1>Sekretariat</h1>
                    <p>
                        Czynny od <span class="text-accent">8:00</span>&nbsp;-&nbsp;<span class="text-accent">15:00</span>
                    </p>
                </div>

                <div class="contact--section">
                    <h1>Kontakt</h1>
                    <p>
                        <span class="material-icons">alternate_email</span>
                        <span>e-mail</span>: <a href="mailto:zsz1luk@pro.onet.pl">zsz1luk@pro.onet.pl</a>
                    </p>
                    <p>
                        <span class="material-icons">phone</span>
                        <span>telefon</span>: (25)&nbsp;798&nbsp;29&nbsp;50
                    </p>
                    <p>
                        <span class="material-icons">fax</span>
                        <span>fax</span>: (25)&nbsp;798&nbsp;29&nbsp;50
                    </p>
                </div>
            </div>
            <div class="contact--column">
                <div class="contact--section">
                    <h1>Adres</h1>
                    <p>
                        <span class="material-icons">location_city</span>
                        <span>Al. Tadeusza Kościuszki 10</span> <br> 21-400 Łuków
                    </p>

                    <div class="map-wrapper">
                        <iframe
                            class="map"
                            class:dark={$theme === 'dark'}
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.886669803751!2d22.378653915977562!3d51.93602068709384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4721ff6705eaf069%3A0xc14df252df41b082!2sAleje%20Tadeusza%20Ko%C5%9Bciuszki%2010%2C%2021-400%20%C5%81uk%C3%B3w!5e0!3m2!1spl!2spl!4v1648583520598!5m2!1spl!2spl" 
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .flex {
        display: flex;
        gap: 2em;
        width: 100%;
    }

    .contact:not(.mobile) .contact--column {
        width: 50%;
    }

    .contact--section:not(:last-of-type) {
        margin-bottom: 2em;
    }

    h1 {
        color: var(--text-accent);
    }
    
    h1::after{
        content:":";
    }

    p {
        padding: .25em 0;
        font-size: 1.5em;
    }

    span.text-accent {
        color: var(--text-accent);
        font-weight: bold;
    }

    .map-wrapper {
        margin-top: 1em;
        border: 2px solid var(--accent);
    }
    .material-icons{
        color: var(--text-accent);
        font-size: 1.5em;

    }
    .map {
        position: relative;
        width: 100%;
        height: 25em;
        margin-bottom: -5px;
        border: 0;
        z-index: 0;
    }

    .map.dark {
        filter: invert(90%);
    }

    .mobile .flex {
        flex-direction: column;
        align-items: center;
        gap: 5em;
    }
    .material-icons{
        vertical-align: bottom;
        /* font-size: 1em; */
    }
</style>



