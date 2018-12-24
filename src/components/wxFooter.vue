<template>
    <div class="wxFooter">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="scss">
    .wxFooter{
        border-top: 1px solid #EBEBEB;
        position: fixed;
        bottom: 0;
        left: 0;
        height: 1.333333rem;
        width: 100%;
        text-align: center;
        font-size: 0.32rem;
        line-height: .32rem;
        color: #BCBCBC;
        margin-top: .02rem;
        background:#fff;
        z-index: 990;
        box-shadow: 0 0 12px 0 rgba(0,0,0,0.12);
        ul{
            display: table;
            width: 100%;
            li{
                padding-top: 0.133333rem;
                display: table-cell;
                // width: 33.3%;
                width: 25%;
            }
        }
    } 
</style>
