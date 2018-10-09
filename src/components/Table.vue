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
                    <TableItem
                        v-for="(item, index) in statusList" :key="index"
                        :status='item.status'
                        :id='index'
                        @click_item="click_item"
                    />
                </tr>
            </tbody>             
        </table>
        <TheModal
            v-show="showTheModal.ifshow"
            @close="close"
        />
    </div>
</template>

<script>
import TableItem from '@/components/TableItem';
import TheModal from '@/components/TheModal'
export default {
    components: {
        'TableItem' : TableItem,
        'TheModal' : TheModal
    },
    computed:{
    },
    props:['month'],
    data(){
        return{
            statusList:[
                { status: '',
                  loc: '1',}, 
                { status: 'reserved',
                  loc: '2',}, 
                { status: '',
                  loc: '3',}, 
                { status: 'reserved',
                  loc: '4',}, 
                { status: '',
                  loc: '5',}, 
                { status: 'reserved',
                  loc: '6',}, 
                { status: '',
                  loc: '7',},          
            ],
            showTheModal:{
                loc:0,
                ifshow:false,
                content:''
            }
        };
    },
    methods:{
        click_item(payload){
            if(payload.status == ''){
                this.showTheModal.ifshow=true;
            }
        },
        close(){
            this.showTheModal.ifshow=false;
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

