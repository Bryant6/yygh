<template>
  <div class="app-container">
      医院设置添加
      <el-form label-width="120px">
         <el-form-item label="医院名称">
            <el-input v-model="hospitalSet.hosname"/>
         </el-form-item>
         <el-form-item label="医院编号">
            <el-input v-model="hospitalSet.hoscode"/>
         </el-form-item>
         <el-form-item label="api基础路径">
            <el-input v-model="hospitalSet.apiUrl"/>
         </el-form-item>
         <el-form-item label="联系人姓名">
            <el-input v-model="hospitalSet.contactsName"/>
         </el-form-item>
         <el-form-item label="联系人手机">
            <el-input v-model="hospitalSet.contactsPhone"/>
         </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="saveOrUpdate">保存</el-button>
         </el-form-item>
      </el-form>
   </div>
</template>

<script>
import hospset from '@/api/hospset'

export default {
    data(){
        return {
            hospitalSet:{}
        }
    },
    created(){
        if(this.$route.params && this.$route.params.id){
            //获取路由id值
            const id = this.$route.params.id
            this.getHospSet(id)
        }else{
            //清空表单数据
            this.hospitalSet = {}
        }
    },
    methods:{
        //根据id查询
        getHospSet(id){
            hospset.getHospSet(id)
                .then(response => {
                    this.hospitalSet = response.data
                })
        },
        //添加
        save(){
            hospset.saveHospSet(this.hospitalSet)
                .then(response => {
                    this.$message({
                        type: 'success',
                        message: '添加成功!'
                        })
                    //跳转到列表页面
                    this.$router.push({path:'/hospSet/list'})
                })
        },
        //修改
        update(){
            hospset.updateHospSet(this.hospitalSet)
                .then(response => {
                    this.$message({
                        type: 'success',
                        message: '修改成功!'
                        })
                    //跳转到列表页面
                    this.$router.push({path:'/hospSet/list'})
                })
        },
        saveOrUpdate(){
            if(!this.hospitalSet.id){
                this.save()
            }else{
                this.update()
            }
        }
    }
}
</script>
