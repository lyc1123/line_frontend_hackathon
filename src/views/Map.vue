<template>
    <GMap :projectId='projectId' :place='place' :position='position'/>
</template>

<script>
import GMap from '@/components/GoogleMap.vue'
export default {
    name: "Map",
    components: {
        GMap
    },
    data(){
        return{
            projectId:this.$route.query.projectId,
            place: this.$route.query.place,
            position: this.$route.query.position
        }
    },
}
</script>

<style scoped>

</style>