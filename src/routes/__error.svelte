<script context="module">
/** @type {import('@sveltejs/kit').ErrorLoad} */
    export function load({ error, status }) {
        return {
            props: {
                error: `${status}: ${error.message}`
            }
        };
    }
</script>

<script>
    export let error;
</script>

<div class="error">
    <section class="expanded-section">
        <h2>
            {error}
        </h2>
    </section>
</div>