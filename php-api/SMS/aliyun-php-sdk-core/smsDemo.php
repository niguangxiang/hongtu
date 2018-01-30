<?php
    header("Content-type: text/html; charset=utf-8");
include 'Config.php';
include_once 'Request/V20170525/SendSmsRequest.php';
include_once 'Request/V20170525/QuerySendDetailsRequest.php';

function sendSms() {
    
    //此处需要替换成自己的AK信息
    $accessKeyId = "LTAIhRCwQcbqv3CS";
    $accessKeySecret = "noP6EItJh59cD3J822OMicRQJyCkkb";
    //短信API产品名
    $product = "Dysmsapi";
    //短信API产品域名
    $domain = "dysmsapi.aliyuncs.com";
    //暂时不支持多Region
    $region = "cn-hangzhou";
    
    //初始化访问的acsCleint
    $profile = DefaultProfile::getProfile($region, $accessKeyId, $accessKeySecret);
    DefaultProfile::addEndpoint("cn-hangzhou", "cn-hangzhou", $product, $domain);
    $acsClient= new DefaultAcsClient($profile);
    
    $request = new Dysmsapi\Request\V20170525\SendSmsRequest;
    //必填-短信接收号码
    $request->setPhoneNumbers("15552656838");
    //必填-短信签名
    $request->setSignName("宏图");
    //必填-短信模板Code
    $request->setTemplateCode("SMS_123671116");
    //选填-假如模板中存在变量需要替换则为必填(JSON格式)
    $request->setTemplateParam("{\"code\":\"1305\"}");
    //选填-发送短信流水号
   
    
    //发起访问请求
    $acsResponse = $acsClient->getAcsResponse($request);
    var_dump($acsResponse);
}

function querySendDetails() {
    
    //此处需要替换成自己的AK信息
    $accessKeyId = "LTAIhRCwQcbqv3CS";
    $accessKeySecret = "noP6EItJh59cD3J822OMicRQJyCkkb";
    //短信API产品名
    $product = "Dysmsapi";
    //短信API产品域名
    $domain = "dysmsapi.aliyuncs.com";
    //暂时不支持多Region
    $region = "cn-hangzhou";
    
    //初始化访问的acsCleint
    $profile = DefaultProfile::getProfile($region, $accessKeyId, $accessKeySecret);
    DefaultProfile::addEndpoint("cn-hangzhou", "cn-hangzhou", $product, $domain);
    $acsClient= new DefaultAcsClient($profile);
    
    $request = new Dysmsapi\Request\V20170525\QuerySendDetailsRequest();
    //必填-短信接收号码
    $request->setPhoneNumber("15552657335");
    //选填-短信发送流水号
    $request->setBizId("abcdefgh");
    //必填-短信发送日期，支持近30天记录查询，格式yyyyMMdd
    $request->setSendDate(date('Y-m-d',time()));
    //必填-分页大小
    $request->setPageSize(10);
    //必填-当前页码
    $request->setContent(1);
    
    //发起访问请求
    $acsResponse = $acsClient->getAcsResponse($request);
    var_dump($acsResponse);
    
}

sendSms();
//querySendDetails();
?>