<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1"
        @change="countChanged" ref="numbox"/>
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
                //console.log(this.$refs.numbox.value)
                this.$emit('getcount',parseInt(this.$refs.numbox.value));
            }
        },
        mounted() {
            mui('.mui-numbox').numbox();
            console.log(this.max)
        },
        props : ["max"],
        watch:{
            max :function (newVal,oldVal) {
                mui('.mui-numbox').numbox().setOption("max",newVal)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>