<template>
    <div>
        <select 
            v-model="selected"
            @change="select_opt">
            <option  disabled value="">请选择老师</option>
            <option 
                v-for="(item,index) in teachers" :key="index">
                {{ item }}
            </option>
        </select>
    </div>    
</template>

<script>

export default {
    name:'VSelect',
    data(){
        return{
            teachers:[
                'a','b','c'
            ],
            selected:''
        };
    },
    methods:{
        select_opt(){
            this.$emit('select', {
                selected: this.selected
            });
        }
    }
}
</script>

