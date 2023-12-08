export default {
  api: {
    baseSrc : 'http://127.0.0.1:3000',
    weather: '/weather', //天气
    Login: '/login',
    Register: '/register',
    //人脸识别
    faceGetToken: '/getToken', //获取Token
    addFace: '/initFace', //添加人脸
    faceFirm: '/checkFace', //识别
    //市政消息
    cityMessage: '/cityMessage', //市政消息
    deletetMessage: '/deletetMessage',
    insertMessage:'/insertMessage',//添加
    //社区消息
    communityMsg: '/communityMsg',
    deletetCommunityMsg: '/deletetCommunityMsg',
    insertCommunityMsg:"/insertCommunityMsg",
    //市民反馈消息
    feedbackMsg: '/feedbackMsg',
    insertFeedbackMsg:'/insertFeedbackMsg',
    deletetFeedbackMsg: '/deletetFeedbackMsg',
 
    //巴法云http控制灯的开关
    /**
     * 获取你在巴法云创建的主题
     * @author zjx
     * @method get
     * @params uid:745e2d7bee3a553a3693dc150d3711cf
     * @params type:1
     */
    getThem: ' https://api.bemfa.com/api/device/v1/topic/',
    /**
     * 更改灯的状态
     * @author zjx
     * @method POST
     * @params uid:745e2d7bee3a553a3693dc150d3711cf
     * @params light002 //你所要控制的主题
     * @params type:3
     * @params msg:on/off 
     */
    changeLightWay: 'https://api.bemfa.com/api/device/v1/data/1/push/post/',
    // light
    lightMsg: '/lightMsg', // 查询light信息
    idLightMsg: '/idLightMsg', // 根据id查询light信息
    lightSum:'/lightSum',
    // 添加接口
    /**
     * 
     * @param {date:String} req 
     * @param {name:String} req
     * @param {local:Number} req
     * @param {isOPen:Number} req 0关，1开
     */
    addLightMsg: '/addLightMsg', // 添加
    deleteLightMsg: '/deleteLightMsg',// 删除 根据id
    editLightMsg:'/editLightMsg',// 根据id 编辑
    isOpenLightMsg:'/isOpenLightMsg',// 修改灯的状态
    // 排水
    OutWaterMsg: '/OutWaterMsg', // 查询OutWater信息
    idOutWaterMsg: '/idOutWaterMsg', // 根据id查询OutWater信息
    waterSum:'/waterSum',
    // 添加接口
    /**
     * 
     * @param {date:String} req 
     * @param {name:String} req
     * @param {local:Number} req
     * @param {isOPen:Number} req 0关，1开
     */
    addOutWaterMsg: '/addOutWaterMsg', // 添加
    deleteOutWaterMsg: '/deleteOutWaterMsg',// 删除 根据id
    editOutWaterMsg:'/editOutWaterMsg',// 根据id 编辑
    isOpenOutWaterMsg:'/isOpenOutWaterMsg',// 修改排水闸门的状态

    // 权限设置
    jurisdictionMsg:"/jurisdictionMsg",//获取用户信息get
    idjurisdictionMsg:'/idjurisdictionMsg',//根据id获取信息post
    deletejurisdictionMsg:"/deletejurisdictionMsg",//删除用户
    editjurisdictionMsg:'/editjurisdictionMsg',//修改权限
    editSphoneJurisdiction:'/editSphoneJurisdiction',//根据电话号码获取信息
  }
}