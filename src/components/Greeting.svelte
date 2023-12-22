<script lang="ts">
    const currentTime = new Date()
    const currentHoure = currentTime.getHours()


    let greeting = ''

    if (currentHoure < 12) {
        greeting = 'Good morning'
    }
    else if (currentHoure  < 18){
        greeting = 'Good afternoon'
    }
    else {
        greeting = 'Good night'
    }
</script>



<h1 class="text-3xl font-bold text-white">{greeting}</h1>
