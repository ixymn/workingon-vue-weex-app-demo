<template>
  <div class="container">
    <text class="fixed-button" @click="jump(`/login`)">back</text>
    <text class="test-button">{{ ti }}</text>
  </div>
</template>

<style scoped>
  .container{flex:1;align-items:center;justify-content: center;flex-direction: column;}
  .test-button{
    margin-top: 20px;
    background-color: #FC6621;
    border-radius: 10px;
    width: auto;
    padding: 15px;
    color: #fff;
    text-align: center;
  }
  .fixed-button {
    margin-top: 20px;
    background-color: #FC6621;
    border-radius: 10px;
    width: auto;
    padding: 15px;
    color: #fff;
    text-align: center;
  }
</style>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        ti: WXEnvironment.platform,
      };
    },
    computed: {
      ...mapState([
        'user'
      ])
    },
    methods:{

      jump(){
        this.$router.push("/login")
      }
    },
    created(){

    }
  }
</script>
