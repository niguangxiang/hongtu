<?php
// +----------------------------------------------------------------------
// | ThinkCMF [ WE CAN DO IT MORE SIMPLE ]
// +----------------------------------------------------------------------
// | Copyright (c) 2013-2018 http://www.thinkcmf.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author:kane < chengjin005@163.com>
// +----------------------------------------------------------------------
namespace app\user\controller;


use cmf\controller\AdminBaseController;
use think\Controller;
	use think\Db;
	use think\Session;
	use think\View;
	use think\Validate;


/**
 * Class AdminTagController 订单管理控制器
 * @package app\portal\controller
 */
class AdminOrderController extends AdminBaseController
{
	public function index()
    {
        
        //检索订单号
        $where=[];
        $arr=[];
        if($_GET) 
        	{
        		
        		$number=input('ordernumber');
        		$a=input('time');
        		$b=input('time1');
        		$time= strtotime(input('time'));
        		$time1= strtotime(input('time1'));
        		if($number)
        		{
        			$where['number']=["like","%".input('ordernumber')."%"];
        			$arr['number']=$number;
        		}
        		if($time && $time1)
        		{
        			$where['time']=["between time",[$time,$time1]];
        			$arr['time']=$a;
                	$arr['time1']=$b;
        		}

        	}
        	$sql=Db::table('cmf_portal_order')->where($where)
				->paginate(20,false,['query'=>request()->param()]);
				$page=$sql->render();
				$this->assign('page', $page);
       return $this->fetch('index',['sql'=>$sql,'arr'=>$arr]);
    }
    public function Del($id)
    {
        if(input('id'))
				{
				  	$id=input('id');

				}		
			else
			{
				$id=input('pid/a');	 
			}
				$result = Db::name('portal_order')->delete($id);
		    	if($result)
			    	{
			    		$this->success('删除成功！','admin_order/index');
			    	}
		    	else 
		    	{
		    	    $this->error('删除失败','index');
		    	}
    }
    public function Dels()
    {
      $id=input('checck/a');
      $ids=implode(',',$id);
      if($id)
      {
      	$result = Db::name('portal_order')->where("id in ($ids)")->delete();
		    	if($result)
			    	{
			    		$this->success('删除成功！','admin_order/index');
			    	}
      }
      else
      {
      	$this->error('请选择删除对象','index');
      }
      
     /* User::deleteAll(['in' ,'u_id', $id]);*/
      return $this->redirect(['index']);

    }
    public function Add()
    {
        return $this->fetch();
    }
}
