<script context="module">
/** @type {import('@sveltejs/kit').ErrorLoad} */
    export function load({ error, status }) {
        return {
            props: {
                title: `${status}: ${error.message}`
            }
        };
    }
</script>
  
<script>
    export let title;
</script>


<div class="error">
    <section class="expanded-section">
        <h2>
            {title}
        </h2>
    </section>
</div>