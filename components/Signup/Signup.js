// components/Signup/Signup.js
import{request} from "../../request/index"
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    language:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    emailValue:'',
    phoneValue:'',
    iswornning:true,
    emaliSuc:false,
    userInfo:{
      emali:'',
      phone:'',
      type:''
    },
    allselected: ['男士', '女士', '儿童'],
    enallselected: ['male', 'femal', 'child'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    info(){
      const userInfo=this.data.userInfo;
      if(!userInfo.emali==''&&!userInfo.phone==''&&!userInfo.type==''){
        this.setData({
          iswornning:false,
        })
      }else{
        this.setData({
          iswornning:true,
        })
      }
      // console.log(this.data.iswornning,this.data.userInfo);
    },
    handleGetemali(e){
      const {value}=e.detail;
      const userInfo=this.data.userInfo;
      let emailcheck=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
      if (emailcheck.test(value)){
        userInfo.emali=value
       this.setData({
        userInfo,
        emaliSuc:false
       })
      }else{
        this.setData({
          emaliSuc:true
         })
      }
      this.info();
    },
    handleGetphone(e){
      const {value}=e.detail;
      const userInfo=this.data.userInfo;
      userInfo.phone=value;
      this.setData({
        userInfo
       })
       this.info();
    },
    bindPickerChange(e){
     const index=e.detail.value;
     const userInfo=this.data.userInfo;
     if(this.data.language=='chinese'){
     userInfo.type=this.data.allselected[index]
     this.setData({
      userInfo
    })
    }else{
      userInfo.type=this.data.enallselected[index]
         this.setData({
        userInfo
      })
    }
      this.info();
    },
    handleset(){
      console.log(this.data.userInfo);
      this.setInfo();
      this.setData({
        userInfo:{
          emali:'',
          phone:'',
          type:''
        },
        emailValue:'',
        phoneValue:'',
        iswornning:true
      })
    },
  async setInfo(){
    const data=this.data.userInfo;
    const res=request({url:'/mobileSubscribe',methods:'POST',data:data})
      console.log(res);
  }

  },
})
