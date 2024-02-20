const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                "Passeggiata nella natura",
                "Visita un museo",
                "Serata di giochi da tavolo",
                "Cucinare un nuovo piatto",
                "Leggere un libro avvincente",
            ]
        }
    },
}).mount('#app');