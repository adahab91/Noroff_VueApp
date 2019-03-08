<template>
    <div class="[ row ]">
        <div v-for="drink in drinks" :key="drink.id" class="[ col-sm-12 ]">
            <apicardComponent   v-bind:thumbnailImg="drink.thumbnail"
                                v-bind:title="drink.title"
                                v-bind:ingridients="drink.ingridients"
                                v-bind:readmore="drink.href">
            </apicardComponent>
        </div>
    </div>
</template>

<script>
    import apicardComponent from "./components/apicardComponent.vue"
    export default{
        name: "ApiCards",
        components:{
            apicardComponent
        },
        data(){
            return{
                drinks: []
            }
        },
        beforeMount: function(){
            const app = this;
            const corsProxy = "https://cors-anywhere.herokuapp.com/";
            const recipeApi = "http://www.recipepuppy.com/api/";

            fetch(corsProxy + recipeApi)
            .then(function(response){
                return response.json();
            })
            .then(function(result){
                app.drinks = result.results;
                console.log(result.results)
            })
            
        }
    }
</script> 