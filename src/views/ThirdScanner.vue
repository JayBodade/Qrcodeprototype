<template>
    <div >
      <div>
        <span>Vue3 Qr Reader</span>
      <QrStream   @decode="onDecode"></QrStream>
    </div>
      <div style="margin-top: 20px;" >
        Result : {{ data }}
      </div>
  
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  import { QrStream } from 'vue3-qr-reader';
  
  export default {
    name: 'FirstScanner',
    components: {
      // HelloWorld
      QrStream,
    },
    data(){
      return{
        data:null,
      }
    },
    methods:{
      onDecode(decodedString){
       this.data =  decodedString;
     
      },
      runthis(event){
        console.log('running this',event);

        const tabEvent = new KeyboardEvent('keydown',{
          key: 'Tab',
        keyCode: 9,
        code: 'Tab',
        which: 9,
        })
        console.log(event.target.dispatchEvent(tabEvent));
        
        event.target.dispatchEvent(tabEvent);
      

     
      }
    }
  }
  </script>
  <style>
  .qrcode-stream-camera{
    width: 400px;
    height: 400px;
    margin-bottom: -100px;
  
  }
  
  </style>