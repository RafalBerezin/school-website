<script>
    import { onMount } from "svelte";
    import LinkButton from "$lib/components/buttons/LinkButton.svelte";
    let editor;

    let data = {blocks: []};
    let tools;

    onMount(async () => {
        const { default: EditorJS } = await import("@editorjs/editorjs");
        const { default: Header } = await import("@editorjs/header");
        const { default: List } = await import("@editorjs/list");
        const { default: Quote } = await import("@editorjs/quote");
        const { default: Delimiter  } = await import("@editorjs/delimiter");
        const { default: Table  } = await import("@editorjs/table");

        tools = {
            header: {
                class: Header,
                inlineToolbar: true,
                config:{
                    placeholder: "Wpisz nagłówek",
                    levels: [2, 3, 4],
                    defaultLevel: 2

                }
            },
            list: {
                class: List,
                inlineToolbar: true,
                config: {
                    defaultStyle: 'unordered',
                }
            },
            quote: {
                class: Quote,
                config: {
                        quotePlaceholder: 'Cytat',
                        captionPlaceholder: 'Autor'
                },
            },
            delimiter: Delimiter,
            table:{ 
                class: Table,
                config: {
                    rows: 2,
                    cols: 2,
                    headers: true,
                }
            }
        };

        editor = new EditorJS({
            data,
            tools,
            hideToolbar: false,
            onReady: () => {console.log(`Editor.js is ready to work!`)},
            i18n: {
                messages: {
                    blockTunes:{
                        delete:{
                            "Delete": "Usuń"
                        },
                        moveUp:{
                            "Move up": "Przenieś w górę"
                        },
                        moveDown:{
                            "Move down": "Przenieś w dół"
                        }
                    },
                    ui:{
                        "blockTunes": {
                            "toggler": {
                                "Click to tune": "Dostosuj"
                            },
                        },
                        "inlineToolbar": {
                            "converter": {
                                "Convert to": "Zamień na"
                            },
                            "BoldInlineTool":{
                                "Bold": "Pogrubienie"
                            }

                        },
                        "toolbar": {
                            "toolbox":{
                                "Add": "Dodaj"
                            }
                        }
                    },
                    toolNames: {
                        "Heading": "Nagłówek",
                        "Text": "Tekst",
                        "List": "Lista",
                        "Bold": "Pogrubienie",
                        "Italic": "Pochylenie",
                        "Link": "Hiperłącze",
                        "Quote": "Cytat",
                        "Delimiter": "Separator",
                        "Table": "Tabela"

                    },
                    tools:{
                        "link": {
                            "Add a link": "Dodaj link"
                        },
                        "list": {
                            "Unordered": "Nieuporządkowana",
                            "Ordered": "Uporządkowana"
                        },
                        "table":{
                            "With headings": "Z nagłówkiem",
                            "Without headings": "Bez nagłówka",
                            "Add column to left": "Dodaj kolumnę po lewej",
                            "Add column to right": "Dodaj kolumnę po prawej",
                            "Delete column": "Usuń kolumnę",
                            "Add row above": "Dodaj wiersz ppowyżej",
                            "Add row below": "Dodaj wiersz poniżej",
                            "Delete row": "Usuń wiersz"
                        }
                    }
                }
            }
        });
    });

    async function save() {
        data = await editor.save()
        
        var dataStr = "data:text/json;charset=utf-8,"+ encodeURIComponent(JSON.stringify(data));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", "editor.json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        
    }

</script>

<div id="main">
    <section class="expanded-section">
        <div class="wrapper">
            <div id="editorjs" ></div>
            <!-- <LinkButton on:click={save} >Zapisz</LinkButton> -->
            <button on:click={save}>Zapis</button>
        </div>
    </section>
</div>

<style>
    #main {
        background-color: var(--main);
        /* height: 100vh; */
        color: var(--text);
    }

    .wrapper {
        width: 100%;
    }
</style>