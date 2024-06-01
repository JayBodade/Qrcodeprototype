<template>
    <div >
      <div>
        <span>Qrcode Reader Vue3</span>
      <QrcodeStream  @decode="onDecode"></QrcodeStream>
    </div>
    <div style="margin-top: 170px;" >
        Result : {{ data }}
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import { QrcodeStream } from 'qrcode-reader-vue3';
  
  export default {
    name: 'FirstScanner',
    components: {
      // HelloWorld
      QrcodeStream,
    },
    data(){
      return{
        data:null,
      }
    },
    methods:{
      onDecode(decodedString){
       this.data =  decodedString;
     
      }
    }
  }
  </script>
  <style>
  .qrcode-stream-camera{
    width: 400px;
    height: 400px;
    margin-bottom: -50px;
  
  }
  
  </style>