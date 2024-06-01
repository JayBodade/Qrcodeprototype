<template>
    <div >
      <div>
        <span >Vue Qrcode Reader</span>
      <QrcodeStream  @detect="onDetect"></QrcodeStream>
    </div>
      <div >
        Result : {{ data?.content }}
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import { QrcodeStream } from 'vue-qrcode-reader';
  
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
     async onDetect(decodedString){
       this.data = await decodedString;
        console.log("this is decoded string",this.data);
        
        
      }
    }
  }
  </script>
  <style >
  .qrcode-stream-camera{
    width: 100% !important;
    height: 500px !important;
    margin-bottom: -150px !important;
  
  }
  
  </style>