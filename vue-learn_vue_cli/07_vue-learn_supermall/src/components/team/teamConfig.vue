<template>
  <el-card shadow="never" class="aui-card-fill">
    <div class="mod-sys-params">
      <el-form :inline="true" :model="dataForm">
        <el-form-item label="球队名称">
          <el-input v-model="dataForm.teamName" placeholder="请输入球队名称" size="small" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="small" @click="searchMatch()">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table v-loading="dataListLoading" :data="dataList" border style="width: 100%">
        <el-table-column type="selection" header-align="center" align="center" width="50"></el-table-column>
        <el-table-column prop="abbreviation" :label="'球队简称'" header-align="center" align="center"></el-table-column>
        <el-table-column prop="name" :label="'球队全称'" header-align="center" align="center"></el-table-column>
        <el-table-column prop="name"  :label="'列表页显示(最优设置七个中文)'" header-align="center" align="center">
          <template slot-scope="scope">
            <el-input :disabled="!isEdit" v-model="teamNameForList"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="name" :label="'详情页显示(最优设置七个中文)'" header-align="center" align="center">
          <template slot-scope="scope">
            <el-input :disabled="!isEdit" v-model="teamNameForDetail"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="设置">
          <template slot-scope="scope">
            <el-button v-if="!isEdit"  @click="editButton(scope.row, scope.$index)">编辑</el-button>
            <el-button v-if="isEdit" @click="submitButton(scope.row, scope.$index)">保存</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>

<script>
  export default {
    data () {
      return {
        //列表页显示变量
        teamNameForList: '',

        //详情页显示变量
        teamNameForDetail: '',

        //加载
        dataListLoading: false,

        //数据源
        dataList: [
          {
            abbreviation: 'asdasd',
            name: 'xxxx'
          }
        ],

        //是否编辑
        isEdit: false,


        dataForm: {
          teamName: ''
        }
      }
    },

    //vue组件一被创建就回调的函数
    created() {
      this.dataList.forEach((item,index) => {
        this.teamNameForList = item.name
        this.teamNameForDetail = item.name
      })
    },
    methods: {
      searchMatch () {
        let params = {
          ...this.dataForm
        }
      },

      //编辑按钮
      editButton () {
        this.isEdit = !this.isEdit
      },

      //提交按钮
      submitButton () {
        //获取 teamNameForList  teamNameForDetail 两个变量值
        let params = { competitorReq: this.dataList }
        this.isEdit = !this.isEdit
      }
    }
  }
</script>

<style scoped>
</style>
