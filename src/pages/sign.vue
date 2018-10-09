<template>
    <main>
        <form class="login-wrap" v-show="showLogin">
            <p v-show="hint">{{ hint }}</p>
            <input style="margin-top: 60px" type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button v-on:click="login">登录</button>
            <span v-on:click="ToRegister">没有账号？马上注册</span>
        </form>
 
        <form class="register-wrap" v-show="showRegister">
            <p v-show="hint">{{ hint}}</p>
            <input style="margin-top: 60px" type="text" placeholder="请输入用户名" v-model="newUsername">
            <input type="password" placeholder="请输入密码" v-model="newPassword">
            <button v-on:click="register">注册</button>
            <span v-on:click="ToLogin">已有账号？马上登录</span>
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
    export default{
        data(){
            return{
                showLogin: true,
                showRegister: false,
                showHint: false,
                hint: '',
                username: '',
                password: '',
                newUsername: '',
                newPassword: ''
            }
        },
        methods: {
            ToRegister(){
                this.showLogin = false;
                this.showRegister = true;
            },
            ToLogin(){
                this.showLogin = true;
                this.showRegister = false;
            },
            register(){

            },
            login(){

            }
        }
    }
</script>