const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [
                {
                    text: "Passeggiata nella natura",
                    done: true,
                },
                {
                    text: "Visita un museo",
                    done: true,
                },
                {
                    text: "Serata di giochi da tavolo",
                    done: false,
                },
                {
                    text: "Cucinare un nuovo piatto",
                    done: false,
                },
                {
                    text: "Leggere un libro avvincente",
                    done: true,
                },
                
            ]
        }
    },
}).mount('#app');