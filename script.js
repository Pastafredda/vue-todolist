const {createApp} = Vue;

createApp({
    data(){
        return{
            items:[
                {
                    text:"Vai in palestra",
                    done: true
                },
                {
                    text:"Studia",
                    done: false
                },
                {
                    text:"Fai gli auguri a tua nonna",
                    done: true
                },
                {
                    text:"Svolgi l'esercizio senza chiedere ai Massimi",
                    done: false
                },
            ]
        }
    }
}).mount('#app');