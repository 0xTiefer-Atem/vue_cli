<template>
  <div>
    <el-card>
      <div slot="header">
        <el-row :gutter="24">
          <el-col :span="12">
            <span>数据-热门赛事配置</span>
          </el-col>
          <el-col :span="12">
            <el-button v-if="!isEdit" @click="editButton()">编辑</el-button>
            <el-button v-if="isEdit" @click="submitButton()">提交</el-button>
          </el-col>
        </el-row>
      </div>

<!--      最开始展示的表格-->
      <el-table v-if="!isEdit" style="width: 70%"
                border
                :data="dataList">
        <el-table-column prop="matchSimple" label="赛事简称"></el-table-column>
        <el-table-column prop="matchAll" label="赛事全称"></el-table-column>
        <el-table-column label="权重">
          <template slot-scope="scope">
            <el-input v-model="scope.row.weight"></el-input>
          </template>
        </el-table-column>
      </el-table>

      <div v-if="isEdit">
        <div class="button-name">
          <el-button >足球</el-button>
        </div>

        <!--      点编辑后显示的表格-->
        <el-table  style="width: 70%"
                  border
                  :data="dataList">
          <el-table-column prop="matchSimple" label="赛事简称"></el-table-column>
          <el-table-column prop="matchAll" label="赛事全称"></el-table-column>
          <el-table-column label="权重">
            <template slot-scope="scope">
              <el-input v-model="scope.row.weight"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="" label="设置">
            <template slot-scope="scope">
              <el-button>取消热门</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-button class="button-name" @click="showDialog()">添加</el-button>
      </div>

      <el-dialog
              title="添加热门赛事"
              :visible.sync="dialogVisible">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-input v-model="matchName" placeholder="请输入赛事名称"></el-input>
          </el-col>
          <el-col :offset="4" :span="8">
            <el-button @click="findMatch">搜索</el-button>
          </el-col>
        </el-row>
        <el-table :data="matchList">
          <el-table-column prop="matchSimple" label="赛事简称"></el-table-column>
          <el-table-column prop="matchAll" label="赛事全程"></el-table-column>
          <el-table-column label="设置">
            <template slot-scope="scope">
              <el-button @click="addMatchItem(scope.row, scope.$index)">添加本场</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>

    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //对话框展示
        dialogVisible: false,

        //是否编辑
        isEdit: false,

        //搜索的赛事名称
        matchName: '',

        //数据源
        dataList: [
          {
            matchSimple: 'A',
            matchAll: 'ASDFGHJKL',
            weight: 1
          },
          {
            matchSimple: 'B',
            matchAll: 'BNMZXCV',
            weight: 1
          }
        ],

        //绑定查询的结果
        matchList: [
          {
            matchSimple: 'A',
            matchAll: 'ASDFGHJKL',
            weight: 1
          },
          {
            matchSimple: 'B',
            matchAll: 'BNMZXCV',
            weight: 1
          }
        ]

      }
    },
    methods: {
      //绑定编辑按钮
      editButton() {
        this.isEdit = !this.isEdit
      },

      //绑定提交按钮
      submitButton() {
        //提交按钮http请求
        this.isEdit = !this.isEdit
      },

      //绑定添加按钮
      showDialog() {
        this.dialogVisible = !this.dialogVisible;
      },

      //绑定添加本场按钮，将信息添加进dataList中
      addMatchItem(item, index) {
        item.weight = this.dataList.length + 1;
        this.dataList.push(item)
      },

      //绑定搜索按钮 http请求
      findMatch() {
        console.log(this.matchName);
      }
    }
  }
</script>

<style scoped>

</style>
