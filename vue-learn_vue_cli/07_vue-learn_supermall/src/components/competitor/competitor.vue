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
        <el-table-column  :label="'列表页显示'" header-align="center" align="center">
            <template slot-scope="scope">
            <el-input v-model="teamNameForList"></el-input>
            </template>
        </el-table-column>
        <el-table-column :label="'详情页显示'" header-align="center" align="center">
            <template slot-scope="scope">
                <el-input v-model="teamNameForDetail"></el-input>
            </template>
        </el-table-column>
        <el-table-column label="设置">
          <template slot-scope="scope">
            <el-button  @click="editButton(scope.row, scope.$index)">编辑</el-button>
            <el-button  @click="submitButton(scope.row, scope.$index)">保存</el-button>
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
      teamNameForList: '',
      teamNameForDetail: '',
      dataListLoading: false,
      dataList: [
          {
              name: 'xxxx'
          }
      ],
      isEdit: false,
      dataForm: {
        teamName: ''
      }
    }
  },
  methods: {
    searchMatch () {
        console.log("search");
        let params = {
        ...this.dataForm
      };
      this.dataList.forEach((item,index) => {
          this.teamNameForList = item.name;
          this.teamNameForDetail = item.name;
      })
        console.log(this.teamNameForDetail, this.teamNameForList);
    },
    editButton () {
      this.isEdit = !this.isEdit
    },
    submitButton () {
      let params = { competitorReq: this.dataList }
      this.isEdit = !this.isEdit
    }
  }
}
</script>
