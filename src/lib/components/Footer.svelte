<script>
        // return current date
        const date = new Date();
        // return current year
        const year = date.getFullYear();

        
</script>
<footer>
    <div class="footer--section footer--content">
        <div class="footer--column">
            <h3>Mapa Strony</h3>
            <ul>
                <li>
                    <a href="/">Strona Główna</a>
                </li>
                <li>
                    <a href="/rekrutacja">Rekrutacja</a>
                </li>
                <li>
                    <a href="/o-szkole">O Szkole</a>
                </li>
                <li>
                    <a href="/dla-ucznia">Dla ucznia</a>
                </li>
                <li>
                    <a href="/aktualnosci">Aktualności</a>
                </li>
                <li>
                    <a href="/kontakt">Kontakt</a>
                </li>
            </ul>
        </div>

        <div class="footer--column">
            <h3>Kontakt</h3>
            <ul> 
                <li>
                    <span class="material-icons">location_city</span>
                    Al. Tadeusza Kościuszki 10 <br> 21-400 Łuków
                </li>
                <li>
                    <span class="material-icons">phone</span>
                    (25) 798 29 50
                </li>
                <li>
                    <span class="material-icons">fax</span>
                    (25) 798 29 50
                </li>
                <li>
                    <span class="material-icons">alternate_email</span>
                    <a href="mailto:zsz1luk@pro.onet.pl	">zsz1luk@pro.onet.pl</a>
                </li>
            </ul>
        </div>

        <div class="footer--column">
            <h3>Media społecznościowe</h3>
            <ul>
                <li>
                    <a href="https://www.facebook.com/ZSNR1Lukow" target="_blank">Facebook Szkoły</a>
                </li>
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100063645815121" target="_blank">Facebook Biblioteki</a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@bibliotekawalejach" target="_blank">TikTok Biblioteki</a>
                </li>
            </ul>
        </div>
    </div>

    <div class="footer--section footer--info">
        <div>
            <p>Strona stworzona przez uczniów szkoły</p>
            <p>&copy; Zespół Szkół Nr 1 im. Henryka Sienkiewicza {year}</p>
        </div>
        <div>
            Ten serwis wykorzystuje pliki cookies. Korzystanie z witryny oznacza zgodę na ich zapis lub odczyt wg ustawień przeglądarki.
        </div>
        <div>
            <p>design & coding | Rafał & Szymon</p>
        </div>
    </div>
</footer>

<style>
    
    footer{
        background-color: var(--accent);
        color: var(--text-on-accent);
        margin-top: auto;

        width: 100%;
        
        padding: 2em;

        -webkit-box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.2);
        -moz-box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.2);
        box-shadow: inset 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    }

    .footer--content {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 2em;
        border-bottom: 1px solid var(--text-on-accent);
    }

    .footer--column {
        padding: 1em 2em;
    }

    .material-icons{
        vertical-align: bottom;
        font-size: 1em;
    }

    h3 {
        font-size: 1.5em;
        margin-bottom: 1em;
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom: .5em;
    }

    a {
        color: var(--text-on-accent);
    }

    .footer--info > div {
        text-align: center;
        padding: .5em 0;
    }
</style>