const {createApp} = Vue;

createApp({
    data(){
        return{
            newItems:'',
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
            ],
        }
    },
    methods:{
        rimuovi(indice){
            this.items.splice(indice, 1)
        },
        aggiungi(){
            this.items.unshift({text:this.items.text})
            this.items.text="";
        },
        changeDone(indice){
            if(!this.items[indice].done){
                this.items[indice].done = true;
            }else{
                this.items[indice].done = false;
            }
        }
    }
}).mount('#app');