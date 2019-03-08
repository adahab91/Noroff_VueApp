<template>
    <div class="[ row ]">
        <div class="[ col-sm-4 ]">
            <div class="[ card ]">
                <div>
                    <img :src="thumbnailImg"/>
                    <br/>
                </div>
                <div class="[ card--information ]"><br/>
                    <b>Title: </b>{{title}}<br/>
                    <b>Ingridients: </b>{{ingridients}}<br/>
                    <b>Read More: </b>{{readmore}}<br/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: "apicardComponent",
        props:["thumbnailImg","title","ingridients","readmore"],
    }
</script>

<style scoped>
    .card{
        border: 2px solid goldenrod;
        border-radius: 3px;
        padding: 20px;
        margin-top: 50px;
        width: 300px;
    }
    .card img{
        width: 100%;
        padding-top: 20px;
    }
    .card b{
        font-weight: 700px;
    }
</style>