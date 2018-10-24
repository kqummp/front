<template>
    <main>
        <form class="login-wrap" v-show="showLogin">
            <p v-show="hint">{{ hint }}</p>
            <input style="margin-top: 60px" type="text" placeholder="请输入用户名" v-model="uid">
            <input type="password" placeholder="请输入密码" v-model="passwd">
            <button @click="login">登录</button>
            <span @click="ToResetPasswd">忘记密码？马上修改</span>
        </form>
 
        <form class="register-wrap" v-show="showResetPasswd">
            <p v-show="hint">{{ hint}}</p>
            <input style="margin-top: 60px" type="text" placeholder="请输入用户名" v-model="uid">
            <input type="password" placeholder="请输入旧密码" v-model="old_passwd">
            <input type="password" placeholder="请输入新密码" v-model="new_passwd">
            <input type="password" placeholder="请确认新密码" v-model="new_passwd_r">
            <button @click="passwdReset">修改</button>
            <span @click="ToLogin">已有账号？直接登陆</span>
        </form>
    </main>
</template>
 
<style>
    .login-wrap{text-align:center;}
    .register-wrap{text-align:center;}
    h3{display: block; margin-top: 50px}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#4b63ff; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#4b63ff;}
</style>
 
<script>
import {login, passwdReset} from '@/service/index.js';
import { mapActions } from 'vuex';

    export default{
        data(){
            return{
                showLogin: true,
                showResetPasswd: false,
                showHint: false,
                hint: '',
                uid: '',
                passwd: '',
                old_passwd: '',
                new_passwd: '',
                new_passwd_r:''
            }
        },
        methods: {
            ...mapActions([
                'logIn'
            ]),
            ToResetPasswd(){
                this.showLogin = false;
                this.showResetPasswd = true;
            },
            ToLogin(){
                this.showLogin = true;
                this.showResetPasswd = false;
            },
            async passwdReset(){
                let uid = this.uid;
                let old_passwd = this.old_passwd;
                let new_passwd = this.new_passwd;
                let new_passwd_r = this.new_passwd_r;

                let result = await passwdReset(uid,old_passwd,new_passwd,new_passwd_r);
                return result;
            },
            async login(){
                 let uid = this.uid;
                 let passwd = this.passwd;
                 let result = await login(uid, passwd);
                 
                 if(result.message == 'OK'){

                     this.logIn({ uid: this.uid });
                    this.$router.push('/std/main/' + this.uid);
                    
                 };
            }
        }
    }
</script>