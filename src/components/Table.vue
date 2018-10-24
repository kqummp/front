<template>
    <div>
        <table class="table-wrap">
            <thead>
                <tr class="thead-tr">
                    <th style="height:30px;width:15px;">
                        {{ month }}
                    </th>
                    <th>周一</th>
                    <th>周二</th>
                    <th>周三</th>
                    <th>周四</th>
                    <th>周五</th>
                    <th>周六</th>
                    <th>周日</th>
                </tr>
            </thead>
            <tbody class="tbody-wrap">
                <tr>
                    <td id="col-1">1</td>
                    
                </tr>
            </tbody>             
        </table>
        <TheModal
            v-show="showTheModal.ifshow"
            @close="close">
            <template slot="header">
                <p>{{showTheModal.content}}</p>
            </template>
        </TheModal>
        <TheReserve 
            v-show="showReserve.ifshow"
            @reserve="reserve"
            @close="close"/>
    </div>
</template>

<script>
import TableItem from '@/components/TableItem';
import TheModal from '@/components/TheModal';
import TheReserve from '@/components/TheReserve';
import { getStatusList } from '@/service/getStatusList';
import { mapState } from 'vuex';

export default {
    components: {
        'TableItem' : TableItem,
        'TheModal' : TheModal,
        'TheReserve' : TheReserve
    },
    created:
        async function () {
            let week = 3;
            let uid = this.$store.state.uid;
 
            try{
                var statusList =  await getStatusList(uid, week);
            }catch(err){
                console.log(err);
            }
            this.statusList = statusList;
        }
    ,
    props:['month'],
    data(){
        return{
            statusList:[],
            showTheModal:{
                id:null,
                ifshow:false,
                content:''
            },
            content:[
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g'
            ],
            showReserve:{
                id:null,
                ifshow:false
            }
        };
    },
    methods:{
        click_item(payload){
            if(payload.status == ''){
                this.showReserve.ifshow=true;
            }
        },
        close(){
            this.showTheModal.ifshow=false;
            this.showReserve.ifshow=false;
        },
        reserve(payload){
            this.showReserve.ifshow = false;
            console.log(payload.selected);
            console.log(payload.purpose);
        }
    }
}
</script>

<style>
    .table-wrap{margin-top: 60px; text-align: center; height: 100%; width: 100%; display: table}
    .thead-tr{background: rgba(238, 236, 236, 0.959); font-size: 0.5%; font-weight: lighter; height: 45px;}
    .tbody-wrap td{height: 45px; background: rgb(245, 247, 247)}
    #col-1{background: rgba(238, 236, 236, 0.959);width: 17px}
</style>

