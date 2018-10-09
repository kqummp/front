<template>
    <td @click="click">
        {{ status }}
    </td>
</template>

<script>

export default {
    name: 'TableItem',
    props:[
        'status',
        'id'
    ],
    methods:{
        click(){
            console.log(this);;
            this.$emit('click_item', {
                status: this.status,
                id: this.id
            });
        }
    }
    
}

</script>

<style>
    td{
        height: 100%;
        width: 36px;
        background: rgba(238, 236, 236, 0.959);
        table-layout: fixed;
        word-break:break-all
    }
</style>