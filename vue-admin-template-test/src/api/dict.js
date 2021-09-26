import request from '@/utils/request'

const api_name = '/admin/cmn/dict'

export default{

  //数据字典列表方法
  dictList(id){
    return request({
      url: `${api_name}/findChildData/${id}`,
      method: 'get'
    })
  }

}