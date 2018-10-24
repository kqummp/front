<template>
   <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <VSelect
              @select="select"/>
          </div>

          <div class="modal-body">
            <input v-model="purpose" placeholder="请大致描述预约目的">
          </div>

          <div class="modal-footer">
              <button calss="modal-default-button" @click='click_reserve'>
                预约
              </button>
              <button class="modal-default-button" @click='click_close'>
                取消
              </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VSelect from '@/components/VSelect'

export default {
    name: 'TheReserve',
    components: {
      'VSelect' : VSelect
    },
    data(){
        return{
          selected:'',
          purpose:''
        };
    },
    methods:{
      click_close(){
        this.selected = '';
        this.$emit('close');
      },
      click_reserve(){
        this.$emit('reserve',{
          selected: this.selected,
          purpose: this.purpose
        });
        this.selected = '';
        
        
      },
      select(payload){
        this.selected = payload.selected;
      }
    }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #4b63ff;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

