<template>
    <div class="mui-numbox" data-numbox-min='1' style="height: 25px">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount"
               @change="countChanged" ref="numbox" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
    import mui from '../../lib/mui/js/mui.min.js'
    export default {
        name: "goodsinfo_numbox",
        data(){
            return{}
        },
        methods:{
            countChanged(){
                this.$store.commit('UpdateGoodsInfo',{id:this.goodsid,count:this.$refs.numbox.value})
            }
        },
        mounted() {
            mui('.mui-numbox').numbox();
        },
        props:["initcount","goodsid"]

    }
</script>

<style lang="scss" scoped>

</style>